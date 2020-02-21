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
        layout: 'table',
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
                                 layout = {this.state.layout}
                                 />
                         }/>

                  <Route path="/course/:courseId/module/:moduleId"
                         exact={true}
                         render={(props) =>
                             <CourseEditorComponent
                                 {...props}
                                 moduleId={props.match.params.moduleId}
                                 courseId={props.match.params.courseId}
                                 layout = {this.state.layout}/>
                         }/>

                  <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                         exact={true}
                         render={(props) =>
                             <CourseEditorComponent
                                 {...props}
                                 lessonId={props.match.params.lessonId}
                                 moduleId={props.match.params.moduleId}
                                 courseId={props.match.params.courseId}
                                 layout = {this.state.layout}/>
                         }/>

                  <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                         exact={true}
                         render={(props) =>
                             <CourseEditorComponent
                                 {...props}
                                 topicId={props.match.params.topicId}
                                 lessonId={props.match.params.lessonId}
                                 moduleId={props.match.params.moduleId}
                                 courseId={props.match.params.courseId}
                                 layout = {this.state.layout}/>
                         }/>

                            <CourseNavComponent
                                addCourse = {this.addCourse}
                                updateForm = {this.updateForm}/>

                            <table className="table table-hover">
                                <thead>
                                    <CourseTableHeaderComponent
                                        toggle = {this.toggle}
                                    />
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