export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"
export const FIND_TOPIC_FOR_LESSON =  "FIND_TOPIC_FOR_LESSON"
export const FIND_TOPIC = "FIND_TOPIC"
export const UPDATE_TOPIC= "UPDATE_TOPIC"
export const EDIT_TOPIC = "EDIT_TOPIC"

export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
})

export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const findTopicForLesson = (actualTopics) => ({
    type: FIND_TOPIC_FOR_LESSON,
    topics: actualTopics,
})

export const findTopic = (topicId) => ({
    type: FIND_TOPIC,
    topicId: topicId
})

export const updateTopic = (topic) => ({
    type: UPDATE_TOPIC,
    newTopic: topic
})

export const editTopic = (topicId) => ({
    type: EDIT_TOPIC,
    topic: topicId
})





