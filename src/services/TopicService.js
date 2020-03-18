import {API_URL} from "../constants";

export const createTopic = (lessonId) =>
    fetch(`https://mighty-peak-17360.herokuapp.com/api/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify({title: "Topic", lesson: lessonId}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const findAllTopics =() =>
    fetch(`https://mighty-peak-17360.herokuapp.com/api/topics`)
        .then(response => response.json())


export const findTopic = async (topicId) => {
    const response = await fetch(`https://mighty-peak-17360.herokuapp.com/api/topics/${topicId}`)
    return await  response.json()
}

export const findTopicForLesson = (lessonId) =>
    fetch(`https://mighty-peak-17360.herokuapp.com/api/lessons/${lessonId}/topics`)
        .then(response => response.json())




export const deleteTopic = (topicId) =>
    fetch(`https://mighty-peak-17360.herokuapp.com/api/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const updateTopic = async (topicId, topic) => {
    return fetch(`https://mighty-peak-17360.herokuapp.com/api/topics/${topicId}`, {
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