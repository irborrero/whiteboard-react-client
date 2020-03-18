import React from "react";

export default class ParagraphWidget extends React.Component {

    state  = {
        widget: this.props.widget
    }

    render() {
        return (
            <form>
                {
                    this.props.editing &&
                    <div>
                        <div className="form-group heading">
                            <label className="heading-widget">Paragraph Widget</label>
                            <button className="btn arrow"
                                    onClick={() => {
                                        this.state.widget.position = this.state.widget.position+1;
                                        this.props.save(this.state.widget)

                                    }}><i className="fas fa-arrow-down"></i></button>

                            <button className="btn arrow"
                                    onClick={() => {
                                        this.state.widget.position = this.state.widget.position-1;
                                        this.props.save(this.state.widget)
                                    }}><i className="fas fa-arrow-up"></i></button>
                            <select
                                onChange={(e) => {
                                    let newType = e.target.value
                                    newType = String(newType)
                                    this.setState(prevState => ({
                                        widget: {
                                            ...prevState.widget,
                                            type: newType
                                        }
                                    }))
                                    this.props.updateWidget(this.state.widget)
                                }}
                                value={this.state.widget.type}>
                                <option value={"HEADING"}>Heading</option>
                                <option value={"PARAGRAPH"}>Paragraph</option>
                                <option value={"LIST"}>List</option>
                                <option value={"IMAGE"}>Image</option>
                            </select>
                            <button className="btn delete"
                                    onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                                <i className="fas fa-times"></i>
                            </button>
                            <button className="btn save-btn" onClick={() => this.props.save(this.state.widget)}>
                                Save
                            </button>
                        </div>

                        <textarea className="form-control"
                               onChange={(e) => {
                                   const newText = String(e.target.value);
                                   this.setState(prevState => ({
                                       widget: {
                                           ...prevState.widget,
                                           text: newText
                                       }
                                   }))
                               }
                               }
                               value={this.state.widget.text}>
                        </textarea>

                        <input className="form-control"
                               onChange={(e) => {
                                   const newTitle = e.target.value;
                                   this.setState(prevState => ({
                                       widget: {
                                           ...prevState.widget,
                                           name: newTitle
                                       }
                                   }))
                               }
                               }
                               value={this.state.widget.name}/>
                    </div>
                }
                {
                    !this.props.editing &&
                    <React.Fragment>
                        <div>
                            <h3>Preview Paragraph</h3>
                            <button className="btn wbdv-row wbdv-button wbdv-edit"
                                    onClick={() => this.props.selectWidget(this.state.widget)}>
                                <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                            </button>
                        </div>
                        <span>
                            {this.state.widget.text}
                        </span>
                    </React.Fragment>
                }
            </form>
        )
    }
}