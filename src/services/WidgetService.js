export const createWidget = (tid, widget) => {
   return fetch(`https://mighty-peak-17360.herokuapp.com/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            name: "Widget" ,
            type: "HEADING",
            style: "UNORDERED",
            text: "New Widget Content",
            size: 1}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

}

export const findAllWidgets = async () => {
    const response = await fetch(`https://mighty-peak-17360.herokuapp.com/api/widgets`)
    return await response.json()
}


export const findWidgetById = async (wid) => {
    const response = await fetch(`https://mighty-peak-17360.herokuapp.com/api/widgets/${wid}`)
    return await  response.json()
}


export const deleteWidget = (wid) => {
 return fetch(`https://mighty-peak-17360.herokuapp.com/api/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())
}

export const findWidgetsForTopic = (tid) =>
        fetch(`https://mighty-peak-17360.herokuapp.com/api/topics/${tid}/widgets`)
            .then(response => response.json())


export const updateWidget = async (wid, widget) => {
    return fetch(`https://mighty-peak-17360.herokuapp.com/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export default {
    deleteWidget,
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    findAllWidgets
}