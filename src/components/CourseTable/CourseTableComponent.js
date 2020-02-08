import React from "react";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({courses, deleteCourse, activeRow, editingRow, selectRow, editRow}) =>
            <tbody>
            {
                courses.map(function(course, index){
                    return (
                        <CourseRowComponent
                            course={course}
                            index={index}
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