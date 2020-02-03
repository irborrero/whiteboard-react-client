import React from "react";

const CourseRowUnselected  = ({course, showEditor}) =>
    <React.Fragment>
        <td>
            <a onClick={showEditor} href="#">
                <i className="fas fa-file-alt wbdv-row wbdv-icon"></i>
                {course.title}
            </a>
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


export default CourseRowUnselected