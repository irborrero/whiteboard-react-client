import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer
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
                        tabs={[
                            {_id: "1", title: "Build"},
                            {_id: "2", title: "Pages"},
                            {_id: "3", title: "Theme"},
                            {_id: "4", title: "Store"},
                            {_id: "5", title: "Apps"},
                            {_id: "6", title: "Settings"}
                        ]}
                        /*
                        moduleId={moduleId}
                        courseId={courseId}
                        */

                    />
                    <li className="nav-item">
                        <button className="btn wbdv-new-page-btn">
                            <i className="fa fa-plus-circle fa-2x"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row custom-row">

            <ModuleListComponent
                courseId={courseId}/>

            <div className="col-8">
            <TopicPillsComponent
                topics={[
                    {_id: "1", title: "Topic 1"},
                    {_id: "2", title: "Topic 2"},
                    {_id: "3", title: "Topic 3"},
                    {_id: "4", title: "Topic 4"}
                ]}
                /* lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId} */
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