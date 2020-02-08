import React from "react";
import {Link} from "react-router-dom";

const CourseRowSelectedComponent  = ({index, course, selectRow, editingRow, deleteRow, editRow}) =>

    <React.Fragment>
        <td class ="selected" onClick={() => selectRow(index)}>
            {
                index !== editingRow &&
                <Link className="white"  to={`/course/${course._id}`}>
                    <i className="fas fa-file-alt wbdv-row wbdv-icon white"></i>
                    <label className="courseTitle">{course.title}</label>
                </Link>
            }
            {index === editingRow && <input id="newinput" placeholder={course.title}/>}
        </td>
        <td className="collapsable wbdv-row wbdv-owner owned-collapse selected">me</td>
        <td className="collapsable wbdv-row wbdv-modified-date lastModified-collapse selected">11:45 AM</td>
        <td className="selected">
            {
                index === editingRow &&
                <button className="btn wbdv-row wbdv-button wbdv-save white" onClick={()=>editRow(index, course)}>
                    <i className="fas fa-check wbdv-button wbdv-save"></i>
                </button>

            }

            {
                index !== editingRow &&
                <div>
                    <button className="btn wbdv-row wbdv-button wbdv-edit white"
                            onClick={()=> editRow(index, course)}>
                        <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                    </button>
                    <button className="btn wbdv-row wbdv-button wbdv-delete white" onClick={()=>deleteRow(course)}>
                        <i className="fas fa-trash-alt wbdv-row wbdv-button wbdv-delete"></i>
                    </button>
                </div>

            }


        </td>
    </React.Fragment>



export default CourseRowSelectedComponent