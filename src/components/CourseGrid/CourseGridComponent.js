import React from "react";
import CourseCardComponent from "./CourseCardComponent";

const CourseGridComponent = ({courses}) =>
    <div className="container grid">
        {
            courses.map(function(course, index){
                return (
                    <span className="container card">
                        <CourseCardComponent
                            course={course}
                            index={index}
                        />
                    </span>
                )
            })
        }
    </div>


export default CourseGridComponent