export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const FIND_ALL_WIDGETS_FOR_TOPIC =  "FIND_ALL_WIDGETS_FOR_TOPIC"
export const FIND_WIDGET = "FIND_TOPIC"
export const UPDATE_WIDGET= "UPDATE_WIDGET"


export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    newWidget: widget
})

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const findWidgetForTopic = (actualWidgets) => ({
    type: FIND_ALL_WIDGETS_FOR_TOPIC,
    widgets: actualWidgets,
})


export const findWidget = (widgetId) => ({
    type: FIND_WIDGET,
    widgetId: widgetId
})

export const updateWidget = (widget) => ({
    type: UPDATE_WIDGET,
    newWidget: widget
})
