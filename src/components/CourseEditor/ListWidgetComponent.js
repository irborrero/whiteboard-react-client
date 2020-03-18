import React from "react";

export default class ListWidgetComponent extends React.Component {


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
                           <label className="heading-widget">List Widget</label>
                           <button className="btn arrow"
                                   onClick={() => {
                                       this.state.widget.position = this.state.widget.position+1;
                                       this.props.save(this.state.widget)
                                   }}>
                               <i className="fas fa-arrow-down"></i></button>
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
                           <button className="btn delete" onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                               <i className="fas fa-times"></i>
                           </button>
                           <button className="btn save-btn" onClick={ () => this.props.save(this.state.widget)}>Save</button>
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
                              value={this.state.widget.text}
                                placeholder={"Enter one list item per line"}>
                           {this.state.widget.text.split(/\r\n|\r|\n/).map(line => line)}
                       </textarea>

                       <select className="form-control"
                               onChange={(e) => {
                                   let newStyle = e.target.value
                                   this.setState(prevState => ({
                                       widget: {
                                           ...prevState.widget,
                                           style: newStyle
                                       }
                                   }))
                               }}
                               value={this.state.widget.style}>

                           <option value="UNORDERED">Unordered</option>
                           <option value="ORDERED">Ordered</option>

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
                       <div>
                           <h3>Preview List</h3>
                           {
                               !this.props.editing &&
                               <button className="btn wbdv-row wbdv-button wbdv-edit"
                                       onClick={() => this.props.selectWidget(this.state.widget)}>
                                   <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                               </button>

                           }
                       </div>
                       {
                           this.state.widget.style === "ORDERED"  &&
                               <ol>
                                   {this.state.widget.text.split(/\r\n|\r|\n/).map(line => <li>{line}</li>)}
                               </ol>
                       }
                       {
                           this.state.widget.style === "UNORDERED" &&
                               <ul>
                                   {this.state.widget.text.split(/\r\n|\r|\n/).map(line => <li>{line}</li>)}
                               </ul>
                        }
           </form>
        )
    }
}