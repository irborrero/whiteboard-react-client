export const createWidget = (tid, widget) => {
   return fetch(`http://localhost:8080/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            name: "Widget" ,
            id: (new Date()).getTime() + "",
            type: "HEADING"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

}
export const findWidgetsForTopic = (tid) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
        .then(response => response.json())


export const findAllWidgets = async () => {
    const response = await fetch(`http://localhost:8080/api/widgets`)
    return await response.json()
}

export const findWidgetById = async (wid) => {
    const response = await fetch(`http://localhost:8080/api/widgets/${wid}`)
    return await  response.json()
}

export const updateWidget = async (wid, widget) => {
    return fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())




export default {
    deleteWidget,
    findWidgetsForTopic,
    createWidget,
    updateWidget,
    findAllWidgets
}