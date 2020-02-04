import React from "react";

const CourseCardComponent = ({course, index}) =>
{
    return (
        <React.Fragment>
            <row>
                <i className="fas fa-file-word fa-6x"></i>
            </row>
            <row className = "course-title-row">
                <label className="course-title-grid">
                    {course.title}
                </label>
            </row>
        </React.Fragment>
        )

}

export default CourseCardComponent