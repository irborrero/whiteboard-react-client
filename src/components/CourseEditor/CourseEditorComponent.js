import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({history, courseId, moduleId, lessonId, findCourseById}) =>
    <Provider store={store}>
    <div className="container-fluid">
        <div className="row especial-row">
            <div className="col-12">
                <ul className="nav nav-tabs nav-justified">
                    <li className="navbar-brand col-4 allspace">
                        <button className="btn wbdv-course-editor wbdv-close" onClick={() => history.push("/")}>
                            <i className="fas fa-times fa-lg"></i>
                        </button>
                        <label className="wbdv-course-title">
                            {courseId}
                        </label>
                    </li>
                    <LessonTabsComponent
                        moduleId={moduleId}
                        courseId={courseId}
                    />
                </ul>
            </div>
        </div>
        <div className="row custom-row">

            <ModuleListComponent
                courseId={courseId}/>

            <div className="col-8">
            <TopicPillsComponent
                lessonId={lessonId}
                moduleId={moduleId}
                courseId={courseId}
                />

                <div className="row">
                    <div className="container">
                        <button className="btn toggle-btn">
                            <i className="fas fa-toggle-on fa-2x"></i>
                        </button>
                        <label className="preview-label">Preview</label>
                        <button className="btn save-btn">Save</button>

                    </div>
                </div>
                <div className="row">
                    <WidgetListComponent/>
                </div>
            </div>
        </div>
        <button className="btn add">
            <i className="fa fa-plus-circle fa"></i>
        </button>
    </div>
    </Provider>

export default CourseEditorComponent