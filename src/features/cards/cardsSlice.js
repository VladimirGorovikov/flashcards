import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
});

export const selectCardById = (id) => (state) => state.cards.cards[id];

export const { addCard } =  cardSlice.actions;
export default cardSlice.reducer;