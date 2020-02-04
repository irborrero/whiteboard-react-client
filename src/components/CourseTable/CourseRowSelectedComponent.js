import React from "react";

const CourseRowSelectedComponent  = ({index, course, selectRow, showEditor, editingRow, deleteRow, editRow}) =>

    <React.Fragment>
        <td class ="selected" onClick={() => selectRow(index)}>
            {
                index !== editingRow &&
                <a className="white" onClick={showEditor} href="#">
                    <i className="fas fa-file-alt wbdv-row wbdv-icon white"></i>
                    <label className="courseTitle">{course.title}</label>
                </a>
            }
            {index === editingRow && <input id="newinput"/>}
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
                    <button className="btn wbdv-row wbdv-button wbdv-edit white"  onClick={()=>editRow(index, course)}>
                        <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                    </button>
                    <button className="btn wbdv-row wbdv-button wbdv-delete" onClick={()=>deleteRow(course)}>
                        <i className="fas fa-times wbdv-row wbdv-button wbdv-delete white"></i>
                    </button>
                </div>

            }


        </td>
    </React.Fragment>



export default CourseRowSelectedComponent