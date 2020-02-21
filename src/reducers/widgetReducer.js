import {CREATE_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, FIND_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions";
import {FIND_TOPIC, UPDATE_TOPIC} from "../actions/topicActions";

const widgets=[
    {id: "123", title: "Widget 123"},
    {id: "234", title: "Widget 234"},
    {id: "345", title: "Widget 345"}
]

const widgetReducer = (state = {widgets: widgets}, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            }

        case FIND_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id === action.widgetId)
            }

        case UPDATE_WIDGET:
            return {
                widgets: state.widgets
            }
        default:
            return state
    }
}
