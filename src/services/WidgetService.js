
export const createWidget = (tid, widget) =>
    fetch(`/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify({name: "Widget"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`/api/topics/${tid}/widgets`)
        .then(response => response.json())


export const findAllWidgets = async () => {
    const response = await fetch(`/api/widgets`)
    return await response.json()
}

export const findWidgetById = async (wid) => {
    const response = await fetch(`/api/widgets/${wid}`)
    return await  response.json()
}

export const updateWidget = async (wid, widget) => {
    return fetch(`/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteWidget = (wid) =>
    fetch(`/api/widgets/${wid}`, {
        method: "DELETE"
    })
        .then(response => response.json())




export default {
    deleteWidget,
    findWidgetsForTopic,
    createWidget,
    updateWidget
}