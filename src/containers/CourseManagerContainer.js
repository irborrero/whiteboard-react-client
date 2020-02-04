import React from "react";
import CourseTableComponent from "../components/CourseTable/CourseTableComponent";
import CourseGridComponent from "../components/CourseGrid/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, findCourseById, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import CourseNavComponent from "../components/CourseNavComponent";
import CourseTableHeaderComponent from "../components/CourseTableHeaderComponent";

class CourseManagerContainer extends React.Component {

    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: "New Course Title",
        courses: [],
        selectedRow: -1,
        editingRow: -1,
        showEditorCourse: {}
    }

    selectRow = (index) =>
        this.setState(prevState => {
            if(this.state.selectedRow === index && this.state.editingRow === -1) {
                this.setState({
                    selectedRow: -1,
                    editingRow: -1
                })
            } else {
                this.setState({
                    selectedRow: index
                })
            }
        })

    editRow = (index, course) =>
        this.setState(prevState => {
            if(this.state.editingRow === index) {
                this.updateCourseRow(index, course)
                this.setState({
                    editingRow: -1
                })
            } else {
                this.setState({
                    editingRow: index
                })
            }
        })

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({
                    courses: courses
                })
            )

    toggle = () =>
        this.setState(prevState => {
            if(prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })


    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function(crs) {
                                return crs._id !== course._id
                            })
                    })
                })
            })

        this.setState({
            selectedRow: -1
        })
    }


    addCourse = () => {
            if(document.getElementById("wbdv-new-course").value !== "") {
                createCourse({
                    title: this.state.newCourseTitle
                }).then(actualCourse => this.setState(prevState => {
                        return ({
                            courses: [
                                ...prevState.courses,
                                actualCourse
                            ]
                        })
                    })
                )
            }
        document.getElementById("wbdv-new-course").value = ""
    }

   updateCourseRow = (index, course) => {
        if(document.getElementById("newinput").value) {
            course.title = document.getElementById("newinput").value
            updateCourse(course._id, course)
        }
    }

    showEditor = (showEditorCourse) =>
        this.setState({
            showEditor: true,
            showEditorCourse: showEditorCourse
        })

    hideEditor = () =>
        this.setState({
            showEditor: false
        })

    updateForm = (newState) => {
            this.setState(newState)
    }

    render() {
        return(
              <div className="manager-container">
                    {
                        this.state.showEditor &&
                        <CourseEditorComponent
                            hideEditor={this.hideEditor}
                            course = {this.state.showEditorCourse}
                        />
                    }
                    {
                        !this.state.showEditor &&
                        <div>
                            <CourseNavComponent
                                addCourse = {this.addCourse}
                                updateForm = {this.updateForm}/>

                            <table className="table table-hover">
                            <thead>
                            <CourseTableHeaderComponent
                                layout = {this.state.layout}
                                toggle = {this.toggle}
                            />

                            </thead>

                            {
                                this.state.layout === 'table' &&
                                <CourseTableComponent
                                    courses={this.state.courses}
                                    deleteCourse={this.deleteCourse}
                                    showEditor={this.showEditor}
                                    activeRow={this.state.selectedRow}
                                    editingRow={this.state.editingRow}
                                    selectRow ={this.selectRow}
                                    editRow={this.editRow}/>

                            }
                            </table>
                            {
                                this.state.layout === 'grid'
                                && <CourseGridComponent
                                    courses={this.state.courses}
                                    deleteCourse={this.deleteCourse}
                                    showEditor={this.showEditor}
                                    select ={this.selectRow}
                                    edit={this.editRow}
                                    editing={this.state.editingRow}
                                    selected = {this.state.selectedRow}/>
                            }

                        </div>
                    }
                </div>
        )
    }
}

export default CourseManagerContainer