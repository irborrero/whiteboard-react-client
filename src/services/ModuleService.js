import {API_URL} from "../constants";

//TODO: ADD MODULE
export const createModule = (courseId) =>
    fetch(`${API_URL}/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify({title: "Module"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findModuleForCourse = (courseId) =>
    fetch(`${API_URL}/courses/${courseId}/modules`)
        .then(response => response.json())


export const deleteModule = (moduleId) =>
    fetch(`${API_URL}/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const findModule = async (moduleId) => {
    const response = await fetch(`${API_URL}/modules/${moduleId}`)
    return await response.json()
}


export const updateModule = async (moduleId, module) => {
    return fetch(`${API_URL}/modules/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export default {
    deleteModule,
    findModuleForCourse,
    createModule,
    updateModule
}