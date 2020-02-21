import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

export default class WidgetComponent extends React.Component {
    render() {
        return(
            <React.Fragment>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidgetComponent
                        save = {this.props.save}
                        selectWidget = {this.props.selectWidget}
                        deleteWidget = {this.props.deleteWidget}
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent
                        save ={this.props.save}
                        selectWidget = {this.props.selectWidget}
                        deleteWidget = {this.props.deleteWidget}
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }

            </React.Fragment>
        )
    }
}