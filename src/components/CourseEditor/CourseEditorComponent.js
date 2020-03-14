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
import widgetReducer from "../../reducers/widgetReducer"


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({history, courseId, moduleId, lessonId, topicId, layout}) =>
    <Provider store={store}>
    <div className="container-fluid">
        <div className="row especial-row">
            <div className="col-12">
                <ul className="nav nav-tabs nav-justified">
                    {
                        layout === 'table' &&
                        <button className="btn wbdv-course-editor wbdv-close" onClick={() => history.push("/")}>
                            <i className="fas fa-times fa-lg white fa-2x"></i>
                        </button>
                    }
                    {
                        layout === 'grid' &&
                        <button className="btn wbdv-course-editor wbdv-close" onClick={() => history.push("/grid")}>
                            <i className="fas fa-times fa-lg white fa-2x"></i>
                        </button>
                    }
                    <LessonTabsComponent
                        moduleId={moduleId}
                        courseId={courseId}
                        lessonId={lessonId}
                    />
                </ul>
            </div>
        </div>
        <div className="row custom-row">

            <ModuleListComponent
                courseId={courseId}
                moduleId ={moduleId}/>

            <div className="col-8">
            <TopicPillsComponent
                lessonId={lessonId}
                moduleId={moduleId}
                courseId={courseId}
                topicId={topicId}
                />
                <div className="row">
                    <WidgetListComponent
                        lessonId={lessonId}
                        moduleId={moduleId}
                        courseId={courseId}
                        topicId={topicId}/>
                </div>
            </div>
        </div>
    </div>
    </Provider>

export default CourseEditorComponent