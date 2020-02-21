import React from "react";
import {connect} from "react-redux";
import WidgetComponent from "./WidgetComponent";
import {findWidgetForTopic, createWidget, deleteWidget} from "../../actions/widgetActions";
import widgetService from '../../services/WidgetService'


class WidgetListComponent extends React.Component {
    componentDidMount() {
            this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }

    state = {
        widget: {},
    }

    save = () => {
        this.setState({
            widget: {}
        })
        //this.props.updateWidget(widget.id, widget)
    }


    render() {
        return(
            <div>
                {this.props.widgets && this.props.widgets.map(widget =>
                        <div key={widget.id}>
                            <WidgetComponent
                                save={this.save}
                                editing={widget === this.state.widget}
                                deleteWidget={this.props.deleteWidget}
                                widget={widget}/>

                            {   widget !== this.state.widget &&
                            <button onClick={() =>
                                this.setState({
                                    widget: widget
                                })}>
                                ...
                            </button>
                            }
                        </div>
                    )
                }
                <button onClick={() => this.props.createWidget(this.props.topicId)}>
                    +
                </button>
            </div>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => ({

    createWidget: (tid) => {
        if (tid !== undefined) {
            widgetService.createWidget(tid)
                .then(actualWidget =>
                    dispatch(createWidget(actualWidget)))
        }
    },

    deleteWidget: (wid) =>
        widgetService.deleteWidget(wid)
            .then(status =>
                dispatch(deleteWidget(wid))),

    findWidgetsForTopic: (tid) => {
        widgetService.findWidgetsForTopic(tid)
            .then(actualWidgets => {
                dispatch(findWidgetForTopic(actualWidgets))
            })

    },

    findAllWidgets: () => {
        widgetService.findAllWidgets()
            .then(actualWidgets => {
                dispatch(findWidgetForTopic(actualWidgets))
            })
    },
})

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets,
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListComponent)