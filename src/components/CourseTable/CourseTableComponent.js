import React from "react";
import CourseRow from "./CourseRow";
import CourseTableHeaderComponent from "./CourseTableHeader";

const CourseTableComponent = ({courses, deleteCourse, showEditor}) =>
    <div>
        <table class="table">
            <thead>
                <CourseTableHeaderComponent/>
            </thead>
                {
                    courses.map(function(course, index){
                        return (
                            <CourseRow
                                course={course}
                                showEditor={showEditor}
                                deleteCourse={deleteCourse}/>

                        )
                    })
                }
        </table>
    </div>


export default CourseTableComponent