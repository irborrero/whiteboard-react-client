import React from "react";
import {connect} from "react-redux"
import {findLessonForModule, deleteLesson, editLesson, updateLesson, createLesson, findCourseById, updateLessonForModule} from "../../actions/lessonActions";
import lessonService from '../../services/LessonService'
import courseService from '../../services/CourseService'
import {Link} from "react-router-dom";


class LessonTabsComponent extends React.Component {
    componentDidMount() {
            this.props.findLessonForModule(this.props.moduleId)
            this.props.findCourseById(this.props.courseId)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.moduleId !== this.props.moduleId) {
            this.props.updateLessonForModule(this.props.moduleId)
        }
    }

    render() {
        return (
               <React.Fragment>
                   <li className="navbar-brand col-4 allspace">
                       <label className="wbdv-course-title">
                           {this.props.course.title}
                       </label>
                   </li>
                   {this.props.lessons && this.props.lessons.map(lesson =>
                       <React.Fragment>
                           {
                               this.props.lessonId !== lesson._id &&
                               <li className="nav-item nav-link tab">
                                       <Link className = "white-module" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`}>
                                           <label>
                                               {lesson.title}
                                           </label>
                                       </Link>
                                           <button className="btn wbdv-row wbdv-button wbdv-edit white "  onClick={() => this.props.editLesson(lesson._id)}>
                                               <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit "></i>
                                           </button>
                               </li>
                           }
                           {
                               this.props.lessonId === lesson._id &&
                                   <React.Fragment>
                                       {
                                           this.props.editingLesson === lesson._id &&
                                           <li className="nav-item nav-link blue tab">
                                               <input id="lessonTitle" className="input"  placeholder={lesson.title}/>
                                               <button className="btn wbdv-module-item-delete-btn"
                                                       onClick={() => this.props.deleteLesson(lesson._id)}>
                                                   <Link className = "white-module" to={`/course/${this.props.courseId}/module/${this.props.moduleId}`}>
                                                       <i className="fas fa-times"></i>
                                                   </Link>
                                               </button>
                                               <button className="btn wbdv-row wbdv-button wbdv-save white"
                                                       onClick={() => this.props.updateLesson(lesson._id, lesson)}>
                                                   <i className="fas fa-check wbdv-button wbdv-save"></i>
                                               </button>
                                           </li>
                                       }
                                       {
                                           this.props.editingLesson !== lesson._id &&
                                           <li className="nav-item blue nav-link tab">
                                               <Link className = "white-module" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`}>
                                                   <label>{lesson.title}
                                                   </label>
                                                   <button className="btn wbdv-row wbdv-button wbdv-edit white "  onClick={() => this.props.editLesson(lesson._id)}>
                                                       <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit "></i>
                                                   </button>
                                               </Link>
                                           </li>
                                       }
                                   </React.Fragment>
                           }
                       </React.Fragment>

                   )}
                   <li className="nav-item">
                       <button className="btn wbdv-new-page-btn "
                               onClick={() => this.props.createLesson(this.props.moduleId)}>
                           <i className="fa fa-plus-circle fa-3x"></i>
                       </button>
                   </li>
               </React.Fragment>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        course: state.lessons.course,
        lessons: state.lessons.lessons,
        editingLesson: state.lessons.editingLesson
    }

}

const dispatchToPropertyMapper = (dispatch)  => {
    return {
        findCourseById: (courseId) =>
            courseService.findCourseById(courseId)
                .then(course => {
                    dispatch(findCourseById(course))
                }),

        findLessonForModule: (moduleId) =>
            lessonService.findLessonForModule(moduleId)
                .then(actualLessons => {
                        dispatch(findLessonForModule(actualLessons, moduleId))}),

        updateLessonForModule: (moduleId) =>
            lessonService.findLessonForModule(moduleId)
                .then(actualLessons => {
                    dispatch(updateLessonForModule(actualLessons))
                }),

        editLesson: (lessonId) =>
            dispatch(editLesson((lessonId))),

        deleteLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status =>
                    dispatch(deleteLesson(lessonId))),

        updateLesson: (lessonId, lesson) => {
            if(document.getElementById("lessonTitle").value) {
                lesson.title = document.getElementById("lessonTitle").value
            }
                lessonService.updateLesson(lessonId, lesson)
                    .then(newLesson =>
                        dispatch(updateLesson(newLesson)))

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