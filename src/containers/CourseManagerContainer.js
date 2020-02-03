import React from "react";
import CourseTableComponent from "../components/CourseTable/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, findCourseById, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import CourseNavComponent from "../components/CourseNavComponent";

class CourseManagerContainer extends React.Component {

    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: "",
        courses: []
    }

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

    deleteCourse = (course) =>
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

    addCourse = () => {
        createCourse({
            title: this.state.newCourseTitle
        }).then(actualCourse => this.setState(prevState => {
                return({
                    courses: [
                        ...prevState.courses,
                        actualCourse
                    ]
                })
            })
        )
        document.getElementById("wbdv-new-course").value = ""
    }


    showEditor = () =>
        this.setState({
            showEditor: true
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
              <div>
                    {
                        this.state.showEditor &&
                        <CourseEditorComponent
                            hideEditor={this.hideEditor}/>
                    }
                    {
                        !this.state.showEditor &&
                        <div>
                            <CourseNavComponent
                                state = {this.state}
                                addCourse = {this.addCourse}
                                updateForm = {this.updateForm}/>

                            <button onClick={this.toggle}>Toggle</button>

                            {
                                this.state.layout === 'table' &&
                                <CourseTableComponent
                                    showEditor={this.showEditor}
                                    deleteCourse={this.deleteCourse}
                                    courses={this.state.courses}/>
                            }
                            {
                                this.state.layout === 'grid'
                                && <CourseGridComponent
                                    courses={this.state.courses}/>
                            }
                        </div>
                    }
                </div>
        )
    }
}

export default CourseManagerContainer