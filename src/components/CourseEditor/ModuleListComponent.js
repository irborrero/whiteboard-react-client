import React from "react";
import {connect} from "react-redux";
import {createModule, deleteModule, findModuleForCourse} from "../../actions/moduleActions";
import moduleService from '../../services/ModuleService'

class ModuleListComponent extends React.Component {
    componentDidMount() {
       this.props.findModuleForCourse(this.props.courseId)
    }

    render() {
        return (
            <div className="col-4 custom-col">
                <ul className="list-group wbdv-module-list">
                    {this.props.modules && this.props.modules.map(module =>
                        <li key={module._id} className="list-group-item wbdv-module-item">
                            <label className="wbdv-module-item-title">{module.title}</label>
                            <button className="btn wbdv-module-item-delete-btn" onClick={() => this.props.deleteModule(module._id)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                    )}
                </ul>
                <button className="btn wbdv-module-item-add-btn white" onClick={() => this.props.createModule(this.props.courseId)}>
                    <i className="fas fa-plus fa-2x"></i>
                </button>
            </div>
        );
    }
}


const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch(findModuleForCourse(actualModules))),

        deleteModule: (moduleId) =>
            moduleService.deleteModule()
                .then(status =>
                    dispatch(deleteModule(moduleId))),

        createModule: (courseId) => {
            moduleService.createModule(courseId)
                .then(actualModule =>
                    dispatch(createModule(actualModule)))
        }
    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)