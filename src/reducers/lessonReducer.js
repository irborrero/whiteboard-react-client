import {CREATE_LESSON, FIND_LESSON_FOR_MODULE, FIND_LESSON, UPDATE_LESSON, DELETE_LESSON, SELECT_LESSON, EDIT_LESSON, FIND_COURSE_BY_ID, UPDATE_LESSON_FOR_MODULE} from "../actions/lessonActions";
import {EDIT_MODULE} from "../actions/moduleActions";

const initialState = {
    course: "",
    selectedLesson: "",
    editingLesson: "",
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
                course: state.course,
                selectedLesson: "",
                editingLesson:"",
                lessons: action.lessons
            }

        case CREATE_LESSON:
            return {
                course: state.course,
                selectedLesson: state.selectedLesson,
                editingLesson: state.editingLesson,
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }

        case DELETE_LESSON:
            return {
                course: state.course,
                selectedLesson: "",
                editingLesson: "",
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }

        case SELECT_LESSON:
            return {
                course: state.course,
                lessons: state.lessons,
                selectedLesson: action.selectedLesson,
                editingLesson: ""
            }

        case FIND_LESSON:
            return {
                course: state.course,
                selectedLesson: "",
                editingLesson: "",
                lessons: state.lessons.filter(lesson => lesson._id === action.lessonId)
            }

        case UPDATE_LESSON:
            return {
                course: state.course,
                selectedLesson: state.selectedLesson,
                editingLesson: "",
                lessons: state.lessons
            }

        case FIND_COURSE_BY_ID:
            return {
                course: action.course,
                selectedLesson: state.selectedLesson,
                editingLesson: state.editingLesson,
                lessons: state.lessons
            }

        case EDIT_LESSON:
            return {
                course: state.course,
                lessons: state.lessons,
                editingLesson: action.editingLesson,
                selectedLesson: action.editingLesson
            }

        case UPDATE_LESSON_FOR_MODULE:
            return {
                course: state.course,
                selectedLesson: state.selectedLesson,
                editingLesson: state.editingLesson,
                lessons: action.lessons
            }

        default:
            return state
    }
}

export default lessonReducer