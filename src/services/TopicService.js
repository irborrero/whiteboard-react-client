import {API_URL} from "../constants";

//TODO: ADD TOPIC
export const createTopic = (lessonId) =>
    fetch(`${API_URL}/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify({title: "Topic"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findTopicForLesson = (lessonId) =>
    fetch(`${API_URL}/lessons/${lessonId}/topics`)
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`${API_URL}/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const findTopic = async (topicId) => {
    const response = await fetch(`${API_URL}/topics/${topicId}`)
    return await  response.json()
}


export const updateTopic = async (topicId, topic) => {
    return fetch(`${API_URL}/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export default {
    deleteTopic,
    findTopicForLesson,
    createTopic,
    updateTopic
}