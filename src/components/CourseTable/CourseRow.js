import React from "react";
import CourseRowUnselected from "./CourseRowUnselected"
import CourseRowSelected from "./CourseRowSelected";
import CourseNavComponent from "../CourseNavComponent";

class CourseRow extends React.Component {
    state = {
        editing: false,
        selected: false
    }

    changeSelect = () =>
        this.setState(prevState => {
            if(prevState.selected === true) {
                return ({
                    selected: false
                })
            } else {
                return ({
                   selected: true
                })
            }
        })

    changeToEdit = () => {
        this.setState(prevState => {
            return ({
                editing: true,
                selected: false
            })
        })
    }

    changeToNotEdit = () => {
        this.setState(prevState => {
            return ({
                editing: false,
                selected:false
            })
        })
    }

    deleteRow = () => {
        this.setState(prevState => {
            return ({
                selected:false
            })
        })
        this.props.deleteCourse(this.props.course)
    }

    render() {
        return(
            <tr class="wbdv-row wbdv-course"
                onClick={this.changeSelect}>
                {
                    !this.state.selected &&
                    <CourseRowUnselected
                        course = {this.props.course}
                        showEditor = {this.props.showEditor}
                    />
                }
                {
                    this.state.selected &&
                    <CourseRowSelected
                        state = {this.state}
                        course = {this.props.course}
                        showEditor = {this.props.showEditor}
                        deleteRow = {this.deleteRow}
                        changeToEdit = {this.changeToEdit}
                        changeToNotEdit = {this.changeToNotEdit}
                    />
                }
            </tr>
        )
    }
}

export default CourseRow