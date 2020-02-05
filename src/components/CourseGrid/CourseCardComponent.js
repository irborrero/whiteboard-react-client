import React from "react";

const CourseCardComponent = ({course, index, deleteCourse, showEditor, select, edit, editing, selected}) =>
{
    return (
        <React.Fragment>
            {
                index !== selected &&
                    <div>
                        <div className="card-div"  onClick={() => select(index)}>
                            <i className="fas fa-file-word fa-3x"></i>
                        </div>
                        <div className = "card-div">
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
                                <i className="fas fa-times wbdv-row wbdv-button wbdv-delete"></i>
                            </button>
                        </div>
                    </div>
            }
            {
                index === selected &&
                <div className="selected">
                        <div className="card-div"  onClick={() => select(index)}>
                            <i className="fas fa-file-word fa-3x"></i>
                        </div>
                        <div className = "card-div">
                            {
                                index !== editing &&
                                <a className="white" onClick={()=>showEditor(course)} href="#">
                                    <label className="course-title-grid">
                                        {course.title}
                                    </label>
                                </a>
                            }
                            {
                                index === editing &&
                                <input class = "smaller" id="newinput" placeholder={course.title}/>
                            }
                        </div>
                        <div>
                            {
                                index === editing &&
                                <button className="btn wbdv-row wbdv-button wbdv-save white" onClick={()=>edit(index, course)}>
                                    <i className="fas fa-check wbdv-button wbdv-save"></i>
                                </button>
                            }
                            {
                                index !== editing &&
                                <div>
                                    <button className="btn wbdv-row wbdv-button wbdv-edit white"  onClick={()=>edit(index, course)} >
                                        <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                    </button>

                                    <button className="btn wbdv-row wbdv-button wbdv-delete white"  onClick={()=>deleteCourse(course)}>
                                        <i className="fas fa-times wbdv-row wbdv-button wbdv-delete"></i>
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