import React from "react";
import {connect} from "react-redux"
import {findTopicForLesson, deleteTopic, updateTopic, createTopic, editTopic} from "../../actions/topicActions";
import topicService from '../../services/TopicService'
import {Link} from "react-router-dom";


class TopicPillsComponent extends React.Component {

    componentDidMount() {
            this.props.findTopicForLesson(this.props.lessonId)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.lessonId !== this.props.lessonId) {
            this.props.findTopicForLesson(this.props.lessonId)
        }
    }

    render() {
        return (
            <div className="row">
                <ul className="nav nav-pills">
                {this.props.topics && this.props.topics.map(topic =>
                    <React.Fragment>
                    {
                        parseInt(this.props.topicId) !== parseInt(topic.id) &&
                            <li className="nav-item topic">
                                <Link className = "white-module" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`}>
                                    <label className="nav-link">
                                        {topic.title}
                                    </label>
                                </Link>
                                <button className="btn wbdv-row wbdv-button wbdv-edit white" onClick={() => this.props.editTopic(topic.id)}>
                                    <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                </button>
                            </li>
                    }
                    {
                        parseInt(this.props.topicId)=== parseInt(topic.id) &&
                            <React.Fragment>
                                {
                                    this.props.editingTopic !== topic.id &&
                                    <li className="nav-item topic red">
                                        <Link className = "white-module" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`}>
                                            <label className="nav-link">
                                                {topic.title}
                                            </label>
                                        </Link>
                                        <button className="btn wbdv-row wbdv-button wbdv-edit white" onClick={() => this.props.editTopic(topic.id)}>
                                            <i className="fas fa-pencil-alt wbdv-row wbdv-button wbdv-edit"></i>
                                        </button>
                                    </li>
                                }
                                {
                                    this.props.editingTopic === topic.id &&
                                    <li className="nav-item topic red">
                                        <input id="topicTitle" className="input"  placeholder={topic.title}/>
                                        <button className="btn wbdv-module-item-delete-btn" onClick={() => this.props.deleteTopic(topic.id)}>
                                            <i className="fas fa-times"></i>
                                        </button>
                                        <button className="btn wbdv-row wbdv-button wbdv-save white" onClick={() => this.props.updateTopic(topic.id, topic)}>
                                            <i className="fas fa-check wbdv-button wbdv-save"></i>
                                        </button>
                                    </li>
                                }
                            </React.Fragment>
                    }
                    </React.Fragment>
                )}
                    <li className="nav-item topic">
                        <button className="btn wbdv-new-page-btn" onClick={() => this.props.createTopic(this.props.lessonId)}>
                            <i className="fa fa-plus-circle fa-2x"></i>
                        </button>
                    </li>
                </ul>
            </div>
        )}

}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics,
        editingTopic: state.topics.editingTopic
    }
}

const dispatchToPropertyMapper = (dispatch)  => {
    return {
        findTopicForLesson: (lessonId) =>
            topicService.findTopicForLesson(lessonId)
                .then(actualTopics => {
                    dispatch(findTopicForLesson(actualTopics, lessonId))}),

        editTopic: (topicId) =>
            dispatch(editTopic(topicId)),

        deleteTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status =>
                    dispatch(deleteTopic(topicId))),

        updateTopic: (topicId, topic) => {
            if(document.getElementById("topicTitle").value) {
                topic.title = document.getElementById("topicTitle").value
            }
                topicService.updateTopic(topicId, topic)
                    .then(newTopic=>
                        dispatch(updateTopic(newTopic)))
        },

        createTopic: (lessonId) => {
            if(lessonId !== undefined) {
                topicService.createTopic(lessonId)
                    .then(actualTopic =>
                        dispatch(createTopic(actualTopic)))
            }
        }
    }

}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsComponent)
