import React from "react";

const WidgetListComponent = () =>
    <React.Fragment>
        <form>
            <div className="form-group heading">
                <label className="heading-widget">Heading Widget</label>
                <button className="btn arrow"><i className="fas fa-arrow-down"></i></button>
                <button className="btn arrow"><i className="fas fa-arrow-up"></i></button>
                <button className="btn btn-secondary btn-md dropdown-toggle"> Heading</button>
                <button className="btn delete"><i className="fas fa-times"></i></button>
            </div>
            <div className="form-group">
                <input className="form-control"
                       placeholder="Heading Text"/>
            </div>
            <div className="form-group">
                <select className="form-control">
                    <option value="h1" selected="selected">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                </select>
            </div>
            <div className="form-group">
                <input className="form-control"
                       placeholder="Widget Name"/>
            </div>
            <div className="form-group ">
                <label className="preview-widget">Preview Widget</label>
            </div>
            <div className="form-group">
                <label className="heading-text">Heading Text</label>
            </div>
        </form>
    </React.Fragment>

export default WidgetListComponent



