import { configureStore } from "@reduxjs/toolkit";
import chapters_reducer from "./reducers/chapter_bar"

const store = configureStore({
    reducer: {
        title_order: chapters_reducer
    }
})

export default store