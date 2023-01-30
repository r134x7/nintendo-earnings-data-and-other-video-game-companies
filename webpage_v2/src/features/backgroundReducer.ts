import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colour: "",
    fontColor: "",
}

const backgroundSlice = createSlice({
    name: "background",
    initialState,
    reducers: {
        ADD_BACKGROUND_COLOUR(state, action) {
            return {
                ...state,
                colour: action.payload.colour,
                fontColor: action.payload.fontColor,
            };
        }
    }
})

export const { ADD_BACKGROUND_COLOUR } = backgroundSlice.actions;

export default backgroundSlice.reducer;