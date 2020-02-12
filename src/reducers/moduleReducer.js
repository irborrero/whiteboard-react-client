import {CREATE_MODULE, DELETE_MODULE, FIND_MODULE_FOR_COURSE, FIND_MODULE, UPDATE_MODULE, EDIT_MODULE, SELECT_MODULE} from "../actions/moduleActions";




const initialState = {
    selectedModule: "",
    editingModule: "",
    modules: [
        {_id: "123", title: "Module 1 123"},
        {_id: "234", title: "Module 2 234"},
        {_id: "345", title: "Module 3 345"}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {

        case FIND_MODULE_FOR_COURSE:
            return {
                selectedModule: state.selectedModule,
                editingModule: "",
                modules: action.modules
            }

        case CREATE_MODULE:
            return {
                selectedModule: state.selectedModule,
                editingModule: state.editingModule,
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }

        case DELETE_MODULE:
            return {
                selectedModule: "",
                editingModule: "",
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }

        case EDIT_MODULE:
            return {
                modules: state.modules,
                editingModule: action.editingModule,
                selectedModule: action.editingModule
            }

        case FIND_MODULE:
            return {
                selectedModule: "",
                editingModule: "",
                modules: state.modules.filter(module => module._id === action.moduleId)
            }

        case UPDATE_MODULE:
            return {
                selectedModule: state.selectedModule,
                editingModule: "",
                modules: state.modules
            }

        case SELECT_MODULE:
            return {
                modules: state.modules,
                editingModule:"",
                selectedModule: action.selectedModule
            }

        default:
            return state
    }
}

export default moduleReducer