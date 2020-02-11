import {API_URL} from "../constants";

//TODO: ADD LESSON
export const createLesson = (moduleId) => {
    console.log(moduleId)
    return fetch(`${API_URL}/modules/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify({title: "Lesson"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export const findLessonForModule = (moduleId) =>
    fetch(`${API_URL}/modules/${moduleId}/lessons`)
        .then(response => response.json())


export const deleteLesson = (lessonId) =>
    fetch(`${API_URL}/lessons/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const findLesson = async (lessonId) => {
    const response = await fetch(`${API_URL}/lessons/${lessonId}`)
    return await  response.json()
}


export const updateLesson = async (lessonId, lesson) => {
    return fetch(`${API_URL}/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export default {
    deleteLesson,
    findLessonForModule,
    createLesson,
    updateLesson
}