import React from "react";
import CourseRowUnselectedComponent from "./CourseRowUnselectedComponent";
import CourseRowSelectedComponent from "./CourseRowSelectedComponent";


const CourseRowComponent = ({course, index, showEditor, deleteCourse, activeRow, editingRow, selectRow, editRow}) =>
   {
        return(
            <tr className="wbdv-row wbdv-course">
                {
                    index !== activeRow &&
                    <CourseRowUnselectedComponent
                        index = {index}
                        course = {course}
                        selectRow = {selectRow}
                        showEditor = {showEditor}
                    />
                }
                {
                    index === activeRow &&
                    <CourseRowSelectedComponent
                        index = {index}
                        course = {course}
                        selectRow = {selectRow}
                        showEditor = {showEditor}
                        editingRow = {editingRow}
                        deleteRow = {deleteCourse}
                        editRow = {editRow}
                    />
                }
            </tr>
        )
    }

export default CourseRowComponent