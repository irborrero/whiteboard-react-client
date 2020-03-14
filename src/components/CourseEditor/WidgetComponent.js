import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";

export default class WidgetComponent extends React.Component {
    render() {
        return(
            <React.Fragment>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidgetComponent
                        save = {this.props.save}
                        updateWidget = {this.props.updateWidget}
                        selectWidget = {this.props.selectWidget}
                        deleteWidget = {this.props.deleteWidget}
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent
                        save = {this.props.save}
                        updateWidget = {this.props.updateWidget}
                        selectWidget = {this.props.selectWidget}
                        deleteWidget = {this.props.deleteWidget}
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "LIST" &&
                    <ListWidgetComponent
                        save = {this.props.save}
                        updateWidget = {this.props.updateWidget}
                        selectWidget = {this.props.selectWidget}
                        deleteWidget = {this.props.deleteWidget}
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "IMAGE" &&
                    <ImageWidgetComponent
                        save = {this.props.save}
                        updateWidget = {this.props.updateWidget}
                        selectWidget = {this.props.selectWidget}
                        deleteWidget = {this.props.deleteWidget}
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }

            </React.Fragment>
        )
    }
}