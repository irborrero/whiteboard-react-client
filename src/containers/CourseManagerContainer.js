import React from "react";
import CourseTableComponent from "../components/CourseTable/CourseTableComponent";
import CourseGridComponent from "../components/CourseGrid/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, findCourseById, updateCourse, deleteCourse, createCourse} from "../services/CourseService";
import CourseNavComponent from "../components/CourseNavComponent";
import CourseTableHeaderComponent from "../components/CourseTableHeaderComponent";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class CourseManagerContainer extends React.Component {

    state = {
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



    updateForm = (newState) => {
            this.setState(newState)
    }

    render() {
        return(
            <Router>
              <div className="manager-container">
                  <Route path="/course/:courseId"
                         exact={true}
                         render={(props) =>
                             <CourseEditorComponent
                                 {...props}
                                 courseId={props.match.params.courseId}
                                 />
                         }/>

                            <CourseNavComponent
                                addCourse = {this.addCourse}
                                updateForm = {this.updateForm}/>

                            <table className="table table-hover">
                                <thead>
                                    <CourseTableHeaderComponent/>
                                </thead>

                                <Route path={["/", "/table"]}
                                       exact={true}
                                       render={() =>
                                               <CourseTableComponent
                                                   courses={this.state.courses}
                                                   deleteCourse={this.deleteCourse}
                                                   activeRow={this.state.selectedRow}
                                                   editingRow={this.state.editingRow}
                                                   selectRow={this.selectRow}
                                                   editRow={this.editRow}/>
                                        }/>
                            </table>

                                <Route path="/grid"
                                       exact={true}
                                       render={() =>
                                           <CourseGridComponent
                                               courses={this.state.courses}
                                               deleteCourse={this.deleteCourse}
                                               select ={this.selectRow}
                                               edit={this.editRow}
                                               editing={this.state.editingRow}
                                               selected = {this.state.selectedRow}/>
                                       }/>
                </div>
            </Router>
        )
    }
}

export default CourseManagerContainer