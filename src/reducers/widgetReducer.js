import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    FIND_WIDGET,
    HIDE_WIDGETS,
    UPDATE_WIDGET
} from "../actions/widgetActions";

const initialState = {
    widgets: []
}



const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.actualWidgets
            }

        case FIND_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id === action.widgetId)
            }

        case UPDATE_WIDGET:
            return {
                widgets: state.widgets
            }

        case HIDE_WIDGETS:
            return initialState

        default:
            return state
    }
}

export default widgetReducer