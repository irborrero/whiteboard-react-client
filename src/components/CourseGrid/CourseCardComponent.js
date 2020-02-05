import React from "react";

const CourseCardComponent = ({course, index, deleteCourse, showEditor, select, edit, editing, selected}) =>
{
    return (
        <React.Fragment>
            {
                index !== selected &&
                    <div  className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-img-top"  onClick={() => select(index)}>
                            <i className="fas fa-file-word fa-6x"></i>
                        </div>
                        <div className="card-body">
                                <a className="black" onClick={()=>showEditor(course)} href="#">
                                    <label className="course-title-grid">
                                        {course.title}
                                    </label>
                                </a>
                            </div>
                            <div>
                                <button className="btn wbdv-row wbdv-button wbdv-edit white hidden"  onClick={()=>edit(index, course)} >
                                    <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                </button>

                                <button className="btn wbdv-row wbdv-button wbdv-delete white hidden"  onClick={()=>deleteCourse(course)}>
                                    <i className="fas fa-trash-alt wbdv-row wbdv-button wbdv-delete"></i>
                                </button>
                            </div>
                        </div>

            }
            {
                index === selected &&
                <div className="selected-grid card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-img-top"  onClick={() => select(index)}>
                            <i className="fas fa-file-word fa-6x"></i>
                        </div>
                        <div className="card-body">
                                {
                                    index !== editing &&
                                    <a className="black" onClick={() => showEditor(course)} href="#">
                                        <label className="course-title-grid">
                                            {course.title}
                                        </label>
                                    </a>
                                }
                                {
                                    index === editing &&
                                    <input className="smaller" id="newinput" placeholder={course.title}/>
                                }
                                {
                                    index === editing &&
                                    <button className="btn wbdv-row wbdv-button wbdv-save"
                                            onClick={() => edit(index, course)}>
                                        <i className="fas fa-check wbdv-button wbdv-save"></i>
                                    </button>
                                }
                                {
                                    index !== editing &&
                                    <div>
                                        <button className="btn wbdv-row wbdv-button wbdv-edit"
                                                onClick={() => edit(index, course)}>
                                            <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                        </button>

                                        <button className="btn wbdv-row wbdv-button wbdv-delete"
                                                onClick={() => deleteCourse(course)}>
                                            <i className="fas fa-trash-alt wbdv-row wbdv-button wbdv-delete"></i>
                                        </button>
                                    </div>
                                }
                        </div>
                </div>

            }

        </React.Fragment>
        )

}

export default CourseCardComponent