import React from "react";
import {connect} from "react-redux";
import WidgetComponent from "./WidgetComponent";
import {findWidgetForTopic, createWidget, deleteWidget, updateWidget, hideWidgets} from "../../actions/widgetActions";
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

    save = (widget) => {
        this.setState({
            widget: widget
        })

        this.props.updateWidget(widget.id, widget);
    }

    selectWidget = (widget) => {
        this.setState({
            widget: widget
        })
    }

    render() {
        return(
            <React.Fragment>
                {this.props.widgets && this.props.widgets.map(widget =>
                        <React.Fragment key={widget.id}>
                            <WidgetComponent
                                save={this.save}
                                selectWidget = {this.selectWidget}
                                updateWidget = {this.props.updateWidget}
                                editing={widget === this.state.widget}
                                deleteWidget={this.props.deleteWidget}
                                widget={widget}/>
                        </React.Fragment>
                    )
                }
                    <button className="btn add" onClick={() => this.props.createWidget(this.props.topicId)}>
                        <i className="fa fa-plus-circle fa-4x"></i>
                    </button>
            </React.Fragment>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => ({

    createWidget: (tid) => {
            widgetService.createWidget(parseInt(tid))
                .then(actualWidget =>
                    dispatch(createWidget(actualWidget)))
    },

    deleteWidget: (wid) => {
        widgetService.deleteWidget(wid)
            .then(status =>
                dispatch(deleteWidget(wid)))

    },

    findWidgetsForTopic: (tid) => {
           tid =  parseInt(tid);
           if(!isNaN(tid)) {
               widgetService.findWidgetsForTopic(tid)
                   .then(actualWidgets => {
                       dispatch(findWidgetForTopic(actualWidgets))
                   })
           } else {
                dispatch(hideWidgets())
           }
    },

    findAllWidgets: () => {
        widgetService.findAllWidgets()
            .then(actualWidgets => {
                dispatch(findWidgetForTopic(actualWidgets))
            })
    },

    updateWidget: (wid, widget) => {
        //alert(widget.position)
        widgetService.updateWidget(wid, widget)
            .then(status => {
                dispatch(updateWidget(widget))
            })
    }
})

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets,
})

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListComponent)