import {CREATE_TOPIC, FIND_TOPIC_FOR_LESSON, FIND_TOPIC, UPDATE_TOPIC, DELETE_TOPIC, EDIT_TOPIC} from "../actions/topicActions";

const initialState = {
    editingTopic: "",
    topics: [
        {title: "Topic 1", _id: "000"},
    ]
}

const topicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_TOPIC_FOR_LESSON:
            return {
                editingTopic: "",
                topics: action.topics
            }

        case CREATE_TOPIC:
            return {
                editingTopic: state.editingTopic,
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }

        case DELETE_TOPIC:
            return {
                editingTopic: "",
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            }

        case EDIT_TOPIC:
            return {
                topics: state.topics,
                editingTopic: action.topic
            }

        case FIND_TOPIC:
            return {
                editingTopic: "",
                topics: state.topics.filter(topic => topic._id === action.topicId)
            }

        case UPDATE_TOPIC:
            return {
                editingTopic: "",
                topics: state.topics
            }

        default:
            return state
    }
}

export default topicReducer