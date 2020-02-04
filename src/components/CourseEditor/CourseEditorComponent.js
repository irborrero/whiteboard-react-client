import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";

const CourseEditorComponent = ({course, hideEditor}) =>
    <div className="container-fluid">
        <div className="row especial-row">
            <div className="col-12">
                <ul className="nav nav-tabs nav-justified">
                    <li className="navbar-brand col-4 allspace">
                        <button className="btn wbdv-course-editor wbdv-close" onClick={hideEditor}>
                            <i className="fas fa-times fa-lg"></i>
                        </button>
                        <label className="wbdv-course-title">
                            {course.title}
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
                modules={[
                    {_id: "1", title: "Module 1 - JQuery"},
                    {_id: "2", title: "Module 2 - React"},
                    {_id: "3", title: "Module 3 - Redux"},
                    {_id: "4", title: "Module 4 - Native"},
                    {_id: "5", title: "Module 5 - Angular"},
                    {_id: "6", title: "Module 6 - Node"},
                    {_id: "7", title: "Module 7 - Mongo"}
                ]}/>
            <div className="col-8">
            <TopicPillsComponent
                topics={[
                    {_id: "1", title: "Topic 1"},
                    {_id: "2", title: "Topic 2"},
                    {_id: "3", title: "Topic 3"},
                    {_id: "4", title: "Topic 4"}
                ]}/>

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
                    <form>
                        <div className="form-group heading">
                            <label className="heading-widget">Heading Widget</label>
                            <button className="btn arrow"><i className="fas fa-arrow-down"></i></button>
                            <button className="btn arrow"><i className="fas fa-arrow-up"></i></button>
                            <button className="btn btn-secondary btn-md dropdown-toggle"> Heading</button>
                            <button className="btn delete"><i className="fas fa-times"></i></button>
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                   placeholder="Heading Text"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option value="h1" selected="selected">Heading 1</option>
                                <option value="h2">Heading 2</option>
                                <option value="h3">Heading 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                   placeholder="Widget Name"/>
                        </div>
                        <div className="form-group ">
                            <label className="preview-widget">Preview Widget</label>
                        </div>
                        <div className="form-group">
                            <label className="heading-text">Heading Text</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <button className="btn add">
            <i className="fa fa-plus-circle fa"></i>
        </button>
    </div>

export default CourseEditorComponent