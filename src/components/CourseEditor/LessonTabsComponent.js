import React from "react";


const LessonTabsComponent = ({tabs}) =>
    <React.Fragment>
        {tabs.map(tab =>
        <li className="nav-item">
            <a className="nav-link tab" href="#">
               {tab.title}
            </a>
        </li>
        )}
    </React.Fragment>


export default LessonTabsComponent