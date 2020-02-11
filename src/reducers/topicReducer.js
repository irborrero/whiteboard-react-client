import {CREATE_TOPIC, FIND_TOPIC_FOR_LESSON, FIND_TOPIC, UPDATE_TOPIC, DELETE_TOPIC, SELECT_TOPIC} from "../actions/topicActions";

const initialState = {
    selectedTopic: "",
    topics: [
        {title: "Topic 1", _id: "000"},
    ]
}

const topicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_TOPIC_FOR_LESSON:
            return {
                selectedTopic: "",
                topics: action.topics
            }

        case CREATE_TOPIC:
            return {
                selectedTopic: state.selectedTopic,
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }

        case DELETE_TOPIC:
            return {
                selectedTopic: "",
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }

        case SELECT_TOPIC:
            return {
                topics: state.topics,
                selectedTopic: action.selectedTopic
            }

        case FIND_TOPIC:
            return {
                selectedTopic: "",
                topics: state.topics.filter(topic => topic._id === action.topicId)
            }

        case UPDATE_TOPIC:
            return {
                selectedTopic: "",
                topics: state.topics
            }

        default:
            return state
    }
}

export default topicReducer