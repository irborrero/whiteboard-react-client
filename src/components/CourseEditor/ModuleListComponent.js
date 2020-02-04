import React from "react";

const ModuleListComponent = ({modules}) =>

        <div className="col-4 custom-col">
            <ul className="list-group wbdv-module-list">
                {modules.map(module =>
                    <li key={module._id} className="list-group-item wbdv-module-item">
                        <label className="wbdv-module-item-title">{module.title}</label>
                        <button className="btn wbdv-module-item-delete-btn"><i className="fas fa-times"></i></button>
                    </li>
                )}
            </ul>
            <button className="btn wbdv-module-item-add-btn"><i className="fas fa-plus fa-2x"></i></button>
        </div>



export default ModuleListComponent