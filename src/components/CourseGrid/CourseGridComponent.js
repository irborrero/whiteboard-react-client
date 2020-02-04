import React from "react";
import CourseCardComponent from "./CourseCardComponent";

const CourseGridComponent = ({courses, deleteCourse, showEditor, select, edit, selected, editing}) =>
    <div className="container grid row">
        {
            courses.map(function(course, index){
                return (
                    <div className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                        <CourseCardComponent
                            course={course}
                            index={index}
                            deleteCourse={deleteCourse}
                            showEditor={showEditor}
                            select={select}
                            edit={edit}
                            editing={editing}
                            selected={selected}
                        />
                    </div>
                )
            })
        }
    </div>


export default CourseGridComponent