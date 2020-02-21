import React from "react";
import {connect} from "react-redux";
import {createModule, deleteModule, findModuleForCourse, editModule, updateModule, selectModule} from "../../actions/moduleActions";
import moduleService from '../../services/ModuleService'
import {Link} from "react-router-dom";

class ModuleListComponent extends React.Component {
    componentDidMount() {
       this.props.findModuleForCourse(this.props.courseId)
    }


    render() {
        return (
            <div className="col-4 custom-col">
                <ul className="list-group wbdv-module-list">
                    {this.props.modules && this.props.modules.map(module =>
                        <React.Fragment>
                            {
                                this.props.selectedModule !== module._id &&
                                <li key={module._id} className="list-group-item wbdv-module-item">
                                    <Link className = "white-module" to={`/course/${this.props.courseId}/module/${module._id}`}>
                                        <label className="wbdv-module-item-title"  onClick={() => this.props.selectModule(module._id)} >{module.title}</label>

                                        <button className="btn wbdv-row wbdv-button wbdv-edit white" onClick={() => this.props.editModule(module._id)}>
                                            <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                        </button>
                                    </Link>
                                </li>
                            }

                            {
                                this.props.selectedModule === module._id &&
                                    <React.Fragment>
                                        {
                                            this.props.editingModule !== module._id &&
                                            <li key={module._id} className="list-group-item wbdv-module-item blue">
                                                <Link className = "white-module" to={`/course/${this.props.courseId}/module/${module._id}`}>
                                                    <label className="wbdv-module-item-title">{module.title}</label>
                                                </Link>
                                                    <button className="btn wbdv-row wbdv-button wbdv-edit white" onClick={() => this.props.editModule(module._id)}>
                                                        <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                                    </button>
                                            </li>
                                        }
                                        {
                                            this.props.editingModule === module._id &&
                                            <li key={module._id} className="list-group-item wbdv-module-item blue" >
                                                <input id="moduleTitle" className="input" placeholder={module.title}/>
                                                <button className="btn wbdv-module-item-delete-btn" onClick={() => this.props.deleteModule(module._id)}>
                                                    <Link className = "white-module" to={`/course/${this.props.courseId}`}>
                                                        <i className="fas fa-times"></i>
                                                    </Link>
                                                </button>
                                                <button className="btn wbdv-row wbdv-button wbdv-save white" onClick={() => this.props.updateModule(module._id, module)}>
                                                    <i className="fas fa-check wbdv-button wbdv-save"></i>
                                                </button>
                                            </li>
                                        }
                                    </React.Fragment>
                            }
                        </React.Fragment>
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
        modules: state.modules.modules,
        editingModule: state.modules.editingModule,
        selectedModule: state.modules.selectedModule
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules =>
                    dispatch(findModuleForCourse(actualModules))),

        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status =>
                    dispatch(deleteModule(moduleId))),

        createModule: (courseId) =>
            moduleService.createModule(courseId)
                .then(actualModule =>
                    dispatch(createModule(actualModule))),

        editModule: (moduleId) =>
            dispatch(editModule(moduleId)),

        selectModule: (moduleId) => {
            dispatch(selectModule(moduleId))
        },
        updateModule: (moduleId, module) => {
            if(document.getElementById("moduleTitle").value) {
                module.title = document.getElementById("moduleTitle").value
            }
                    moduleService.updateModule(moduleId, module)
                        .then(newModule =>
                            dispatch(updateModule(newModule)))

            }
        }
    }

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)