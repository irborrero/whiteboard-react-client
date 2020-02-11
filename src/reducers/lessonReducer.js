import {CREATE_LESSON, FIND_LESSON_FOR_MODULE, FIND_LESSON, UPDATE_LESSON, DELETE_LESSON, SELECT_LESSON} from "../actions/lessonActions";

const initialState = {
    selectedLesson: "",
    lessons: [
        {title: "Lesson 0000", _id: "000"},
        {title: "Lesson 123", _id: "123"},
        {title: "Lesson 234", _id: "234"},
        {title: "Lesson 345", _id: "345"},
        {title: "Lesson 456", _id: "456"}
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_LESSON_FOR_MODULE:
            return {
                selectedLesson: "",
                lessons: action.lessons
            }

        case CREATE_LESSON:
            return {
                selectedLesson: state.selectedLesson,
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }

        case DELETE_LESSON:
            return {
                selectedLesson: "",
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }

        case SELECT_LESSON:
            return {
                lessons: state.lessons,
                selectedLesson: action.selectedLesson
            }

        case FIND_LESSON:
            return {
                selectedLesson: "",
                lessons: state.lessons.filter(lesson => lesson._id === action.lessonId)
            }

        case UPDATE_LESSON:
            return {
                selectedLesson: "",
                lessons: state.lessons
            }

        default:
            return state
    }
}

export default lessonReducer