export const CREATE_LESSON = "CREATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const FIND_LESSON_FOR_MODULE =  "FIND_LESSON_FOR_MODULE"
export const FIND_LESSON = "FIND_LESSON"
export const UPDATE_LESSON= "UPDATE_LESSON"
export const SELECT_LESSON = "SELECT_LESSON"

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
})

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const findLessonForModule = (actualLessons,moduleId) => ({
    type: FIND_LESSON_FOR_MODULE,
    lessons: actualLessons,
    module: moduleId
})

export const selectLesson = (lessonId) => ({
    type: SELECT_LESSON,
    selectedLesson: lessonId
})

export const findLesson = (lessonId) => ({
    type: FIND_LESSON,
    lessonId: lessonId
})

export const updateLesson = (lesson) => ({
    type: UPDATE_LESSON,
    newLesson: lesson
})





