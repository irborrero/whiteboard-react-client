import React from "react";

const CourseRowSelected  = ({state, course, showEditor, deleteRow, changeToEdit, changeToNotEdit}) =>
<React.Fragment>
    <td class ="selected">
        {
            !state.editing &&
            <a className="white" onClick={showEditor} href="#">
                <i className="fas fa-file-alt wbdv-row wbdv-icon white"></i>
                {course.title}
            </a>
        }
        {state.editing && <input/>}
    </td>
    <td className="collapsable wbdv-row wbdv-owner owned-collapse selected">me</td>
    <td className="collapsable wbdv-row wbdv-modified-date lastModified-collapse selected">11:45 AM</td>
    <td className="selected">
        {
            state.editing &&
                <button className="btn wbdv-row wbdv-button wbdv-save white" onClick={changeToNotEdit}>
                    <i className="fas fa-check wbdv-button wbdv-save"></i>
                </button>

        }

        {
            !state.editing &&
                <div>
                    <button className="btn wbdv-row wbdv-button wbdv-edit white"  onClick={changeToEdit}>
                        <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                    </button>
                    <button className="btn wbdv-row wbdv-button wbdv-delete" onClick={deleteRow}>
                        <i className="fas fa-times wbdv-row wbdv-button wbdv-delete white"></i>
                    </button>
                </div>

        }


    </td>
</React.Fragment>



export default CourseRowSelected