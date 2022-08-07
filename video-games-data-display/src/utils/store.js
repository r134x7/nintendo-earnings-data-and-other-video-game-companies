import { configureStore } from "@reduxjs/toolkit";

import backgroundReducer from "../features/backgroundReducer";

export default configureStore({
    reducer: backgroundReducer
})