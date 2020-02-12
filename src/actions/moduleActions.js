export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const FIND_MODULE_FOR_COURSE =  "FIND_MODULES_FOR_COURSE"
export const FIND_MODULE = "FIND_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const EDIT_MODULE = "EDIT_MODULE"
export const SELECT_MODULE = "SELECT_MODULE"

export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
})

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const findModuleForCourse = (actualModules) => ({
    type: FIND_MODULE_FOR_COURSE,
    modules: actualModules
})

export const editModule = (moduleId) => ({
    type: EDIT_MODULE,
    editingModule: moduleId
})

export const selectModule = (moduleId) => ({
    type: SELECT_MODULE,
    selectedModule: moduleId
})

export const findModule = (moduleId) => ({
    type: FIND_MODULE,
    moduleId: moduleId
})

export const updateModule = (module) => ({
    type: UPDATE_MODULE,
    newModule: module
})





