import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";

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
                    <li className="nav-item">
                        <a className="nav-link tab" href="#">
                            Build
                        </a>
                    </li>
                    <li className="nav-item wbdv-page-tab">
                        <a className="nav-link active tab" href="#">
                            Pages
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tab" href="#">
                            Theme
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tab" href="#">
                            Store
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tab" href="#">
                            Apps
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tab" href="#">
                            Settings
                        </a>
                    </li>
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

            <TopicPillsComponent
                topics={[
                    {_id: "1", title: "Topic 1"},
                    {_id: "2", title: "Topic 2"},
                    {_id: "3", title: "Topic 3"},
                    {_id: "4", title: "Topic 4"}
                ]}/>
            <div className="col-8">
                <div className="row">
                    <ul className="nav nav-pills">
                        <li className="nav-item topic">
                            <a className="nav-link" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item topic">
                            <a className="nav-link active" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item topic">
                            <a className="nav-link " href="#">Topic 3</a>
                        </li>
                        <li className="nav-item topic">
                            <a className="nav-link" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn wbdv-new-tab-btn">
                                <i className="fa fa-plus-circle fa-2x"></i>
                            </button>
                        </li>
                    </ul>
                </div>
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