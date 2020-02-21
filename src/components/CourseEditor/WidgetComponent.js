import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

export default class WidgetComponent extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidgetComponent
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent
                        editing={this.props.editing}
                        widget={this.props.widget}/>
                }
                {   this.props.editing &&
                <span>
                        <button onClick={() =>
                            this.props.deleteWidget(this.props.widget.id)}>
                            X
                        </button>
                        <button onClick={() =>
                            this.props.save()}>
                            Save
                        </button>
                    </span>
                }
            </div>
        )
    }
}