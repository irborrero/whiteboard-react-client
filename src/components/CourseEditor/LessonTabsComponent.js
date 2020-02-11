import React from "react";
import {connect} from "react-redux"
import {findLessonForModule, selectLesson, deleteLesson, updateLesson, createLesson} from "../../actions/lessonActions";
import lessonService from '../../services/LessonService'
import {Route} from "react-router-dom";



class LessonTabsComponent extends React.Component {
    componentDidMount() {
            this.props.findLessonForModule(this.props.moduleId)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.moduleId != this.props.moduleId) {
            this.props.findLessonForModule(this.props.moduleId)
        }
    }

    render() {
        return (
               <React.Fragment>
                   {this.props.lessons && this.props.lessons.map(lesson =>
                       <li className="nav-item">
                           {
                               this.props.selectedLesson !== lesson._id &&
                               <div className="row">
                                   <a className="nav-link tab" href="#">
                                       {lesson.title}
                                   </a>
                                   <button className="btn wbdv-row wbdv-button wbdv-edit white"
                                           onClick={() => this.props.selectLesson(lesson._id)}>
                                       <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit white"></i>
                                   </button>
                               </div>

                           }
                           {
                               this.props.selectedLesson === lesson._id &&
                               <div className="row">
                                   <input id="lessonTitle" placeholder={lesson.title}/>
                                   <button className="btn wbdv-module-item-delete-btn"
                                           onClick={() => this.props.deleteLesson(lesson._id)}>
                                       <i className="fas fa-times"></i>
                                   </button>
                                   <button className="btn wbdv-row wbdv-button wbdv-save white"
                                           onClick={() => this.props.updateLesson(lesson._id, lesson)}>
                                       <i className="fas fa-check wbdv-button wbdv-save"></i>
                                   </button>
                               </div>
                           }
                       </li>
                   )}
                   <li className="nav-item">
                       <button className="btn wbdv-new-page-btn"
                               onClick={() => this.props.createLesson(this.props.moduleId)}>
                           <i className="fa fa-plus-circle fa-2x"></i>
                       </button>
                   </li>
               </React.Fragment>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons,
        selectedLesson: state.lessons.selectedLesson,
    }

}

const dispatchToPropertyMapper = (dispatch)  => {
    return {
        findLessonForModule: (moduleId) =>
            lessonService.findLessonForModule(moduleId)
                .then(actualLessons => {
                    console.log("fetch" + actualLessons)
                        dispatch(findLessonForModule(actualLessons, moduleId))}),

        selectLesson: (lessonId) =>
            dispatch(selectLesson(lessonId)),

        deleteLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status =>
                    dispatch(deleteLesson(lessonId))),

        updateLesson: (lessonId, lesson) => {
            if(document.getElementById("lessonTitle").value) {
                lesson.title = document.getElementById("lessonTitle").value
                lessonService.updateLesson(lessonId, lesson)
                    .then(newLesson =>
                        dispatch(updateLesson(newLesson)))
            }
        },

        createLesson: (moduleId) => {
            if(moduleId !== undefined) {
                lessonService.createLesson(moduleId)
                    .then(actualLesson =>
                        dispatch(createLesson(actualLesson)))
            }
        }
    }

}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabsComponent)