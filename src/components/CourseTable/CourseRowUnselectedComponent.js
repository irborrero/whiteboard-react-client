import React from "react";
import {Link} from "react-router-dom";

const CourseRowUnselectedComponent  = ({index, course, selectRow}) =>
    <React.Fragment>
        <td onClick={() => selectRow(index)}>
            <Link className="black"to={`/course/${course._id}`}>
                <i className="fas fa-file-alt wbdv-row wbdv-icon"></i>
                <label className="courseTitle">{course.title}</label>
            </Link>
        </td>
        <td className="collapsable wbdv-row wbdv-owner owned-collapse">me</td>
        <td className="collapsable wbdv-row wbdv-modified-date lastModified-collapse">11:45 AM</td>
        <td>
            <button className="btn hidden wbdv-row wbdv-button wbdv-save" >
                <i className="fas fa-check wbdv-button wbdv-save"></i>
            </button>

            <button className="btn hidden wbdv-row wbdv-button wbdv-edit" >
                <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
            </button>

            <button className="btn hidden wbdv-row wbdv-button wbdv-delete">
                <i className="fas fa-times wbdv-row wbdv-button wbdv-delete"></i>
            </button>
        </td>
    </React.Fragment>


export default CourseRowUnselectedComponent