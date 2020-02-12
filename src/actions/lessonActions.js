export const CREATE_LESSON = "CREATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const FIND_LESSON_FOR_MODULE =  "FIND_LESSON_FOR_MODULE"
export const FIND_LESSON = "FIND_LESSON"
export const UPDATE_LESSON= "UPDATE_LESSON"
export const SELECT_LESSON = "SELECT_LESSON"
export const FIND_COURSE_BY_ID = "FIND_COURSE_BY_ID"
export const EDIT_LESSON = "EDIT_LESSON"
export const UPDATE_LESSON_FOR_MODULE = "UPDATE_LESSON_FOR_MODULE"

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
})

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const findLessonForModule = (actualLessons) => ({
    type: FIND_LESSON_FOR_MODULE,
    lessons: actualLessons,
})

export const selectLesson = (lessonId) => ({
    type: SELECT_LESSON,
    selectedLesson: lessonId
})

export const editLesson = (lessonId) => ({
    type: EDIT_LESSON,
    editingLesson: lessonId
})

export const findLesson = (lessonId) => ({
    type: FIND_LESSON,
    lessonId: lessonId
})

export const updateLesson = (lesson) => ({
    type: UPDATE_LESSON,
    newLesson: lesson
})

export const findCourseById = (course) => ({
    type: FIND_COURSE_BY_ID,
    course: course
})

export const updateLessonForModule = (lessons) => ({
    type: UPDATE_LESSON_FOR_MODULE,
    lessons: lessons
})





