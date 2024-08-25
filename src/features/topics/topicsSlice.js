import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: "topics",
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {...action.payload,
               quizIds: []
            };
        },
        addQuizIdToTopic: (state, action) => {
            // Add the quiz id to the appropriate topic ids' quizId array
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;


export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;