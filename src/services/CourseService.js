import {API_URL} from "../constants";


/* createCourse(course) -> creates a new course instance and adds it to the collection of courses */
export const createCourse = (course) =>
    fetch(`${API_URL}/courses`, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

/*
findAllCourses() -> retrieves all course instances as an array of courses */
export const findAllCourses = async () => {
    const response = await fetch(`${API_URL}/courses`)
    return await response.json()
}

/* findCourseById(id) -> retrieves a course instance that matches the id parameter*/
export const findCourseById = async (courseId) => {
    const response = await fetch(`${API_URL}/courses/${courseId}`)
    return await response.json()
}

/* updateCourse(id, course) -> updates the course instance whose id matches the id parameter. Updates the instance with values in course parameter*/
export const updateCourse = async (id, course) => {
    return fetch(`${API_URL}/courses/${id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


/* deleteCourse(id) -> deletes course instance whose id matches the id parameter */
export const deleteCourse = async (courseId) =>
{
    const response = await fetch(`${API_URL}/courses/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}