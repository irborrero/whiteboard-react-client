import React from "react";
import CourseRowUnselected from "./CourseRowUnselected"
import CourseRowSelected from "./CourseRowSelected";

class CourseRow extends React.Component {

    render() {
        return(
            <tr className="wbdv-row wbdv-course">
                {
                    this.props.index !== this.props.activeRow &&
                    <CourseRowUnselected
                        index = {this.props.index}
                        course = {this.props.course}
                        selectRow = {this.props.selectRow}
                        showEditor = {this.props.showEditor}
                    />
                }
                {
                    this.props.index === this.props.activeRow &&
                    <CourseRowSelected
                        index = {this.props.index}
                        course = {this.props.course}
                        selectRow = {this.props.selectRow}
                        showEditor = {this.props.showEditor}
                        editingRow = {this.props.editingRow}
                        deleteRow = {this.props.deleteCourse}
                        editRow = {this.props.editRow}
                    />
                }
            </tr>
        )
    }
}

export default CourseRow