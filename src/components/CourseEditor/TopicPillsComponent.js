import React from "react";

const TopicPillsComponent = ({topics}) =>
        <div className="row">
            <ul className="nav nav-pills">
                {topics.map(topic =>
                <li className="nav-item topic">
                    <a className="nav-link" href="#">{topic.title}</a>
                </li>
                )}
            </ul>
        </div>

export default TopicPillsComponent



