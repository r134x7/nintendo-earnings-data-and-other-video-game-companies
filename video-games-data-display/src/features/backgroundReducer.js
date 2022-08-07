import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colour: "",
}

const backgroundSlice = createSlice({
    name: "background",
    initialState,
    reducers: {
        ADD_BACKGROUND_COLOUR(state, action) {
            return {
                ...state,
                background: action.payload.colour,
            };
        }
    }
})

export const { ADD_BACKGROUND_COLOUR } = backgroundSlice.actions;

export default backgroundSlice.reducer;