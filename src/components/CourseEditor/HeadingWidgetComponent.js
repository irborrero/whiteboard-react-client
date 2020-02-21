import React from "react";

export default class HeadingWidgetComponent extends React.Component {

    state  = {
        widget: this.props.widget
    }

    render() {
        return(
                <form>
                {
                    this.props.editing &&
                    <div>
                        <div className="form-group heading">
                            <label className="heading-widget">Heading Widget</label>
                            <button className="btn arrow"><i className="fas fa-arrow-down"></i></button>
                            <button className="btn arrow"><i className="fas fa-arrow-up"></i></button>
                            <button className="btn btn-secondary btn-md dropdown-toggle">Heading</button>
                            <button className="btn delete" onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                                <i className="fas fa-times"></i>
                            </button>
                            <button className="btn save-btn" onClick={ () => this.props.save(this.state.widget)}>Save</button>
                        </div>

                        <input className="form-control"
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
                               value={this.state.widget.text}
                               placeholder="Widget Text"/>

                        <select className="form-control"
                                onChange={(e) => {
                                    let newSize = e.target.value
                                    newSize = parseInt(newSize)
                                    this.setState(prevState => ({
                                        widget: {
                                            ...prevState.widget,
                                            size: newSize
                                        }
                                    }))
                                }}
                                value={this.state.widget.size}>
                            <option value={1}>Heading 1</option>
                            <option value={2}>Heading 2</option>
                            <option value={3}>Heading 3</option>
                            <option value={4}>Heading 4</option>
                            <option value={5}>Heading 5</option>
                        </select>

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
                                <h3>Preview</h3>
                                <button className="btn wbdv-row wbdv-button wbdv-edit" onClick={() => this.props.selectWidget(this.state.widget)}>
                                    <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                </button>
                            </div>
                            <span>
                                {this.state.widget.size === 1 && <h1>{this.state.widget.text}</h1>}
                                {this.state.widget.size === 2 && <h2>{this.state.widget.text}</h2>}
                                {this.state.widget.size === 3 && <h3>{this.state.widget.text}</h3>}
                                {this.state.widget.size === 4 && <h4>{this.state.widget.text}</h4>}
                                {this.state.widget.size === 5 && <h5>{this.state.widget.text}</h5>}
                                {this.state.widget.size === 6 && <h6>{this.state.widget.text}</h6>}
                            </span>
                        </React.Fragment>
                }
                        </form>

        )
    }
}