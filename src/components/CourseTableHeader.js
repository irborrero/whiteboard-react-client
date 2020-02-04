import React from "react";



const CourseTableHeaderComponent = ({layout}) =>
    <React.Fragment>
        {
           layout === 'table' &&
            <tr>
                <th className="wbdv-header wbdv-title" scope="col">Title
                    <button className="btn">
                        <i className="fas fa-sort-up"></i>
                    </button>
                </th>
                <th className="wbdv-header wbdv-owner owned-collapse" scope="col">
                    <label>Owned by</label>
                </th>
                <th className="wbdv-header wbdv-last-modified lastModified-collapse" scope="col">Last Modified by me</th>
                <th scope="col">
                    <button className="btn wbdv-button wbdv-grid-layout">
                        <i className="fas fa-grip-horizontal"></i>
                    </button>
                    <button className="btn wbdv-button wbdv-header wbdv-sort">
                        <i className="fas fa-sort-alpha-up"></i>
                    </button>

                </th>
            </tr>
        }
    </React.Fragment>



export default CourseTableHeaderComponent