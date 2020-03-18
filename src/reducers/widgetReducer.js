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

function compare(a, b) {
    const orderA = a.position;
    const orderB = b.position;

    let comparison = 0;
    if (orderA > orderB) {
        comparison = 1;
    } else if (orderA < orderB) {
        comparison = -1;
    }
    return comparison;
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
                widgets: action.actualWidgets.sort(compare)
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