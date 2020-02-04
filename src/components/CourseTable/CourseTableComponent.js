import React from "react";
import CourseRow from "./CourseRow";
import CourseTableHeaderComponent from "../CourseTableHeader";

const CourseTableComponent = ({courses, deleteCourse, showEditor, activeRow, editingRow, selectRow, editRow}) =>

            <tbody>
            {
                courses.map(function(course, index){
                    return (
                        <CourseRow
                            course={course}
                            index={index}
                            showEditor={showEditor}
                            deleteCourse={deleteCourse}
                            activeRow={activeRow}
                            editingRow={editingRow}
                            selectRow = {selectRow}
                            editRow = {editRow}
                        />
                    )
                })
            }
            </tbody>




export default CourseTableComponent