import React from "react";
import CourseCardComponent from "./CourseCardComponent";

const CourseGridComponent = ({courses, deleteCourse, select, edit, selected, editing}) =>
    <div className="container grid">
        <div className="row card-row">
            {
                courses.map(function(course, index){
                    return (
                            <CourseCardComponent
                                course={course}
                                index={index}
                                deleteCourse={deleteCourse}
                                select={select}
                                edit={edit}
                                editing={editing}
                                selected={selected}
                            />
                    )
                })
            }
        </div>
    </div>


export default CourseGridComponent