import { configureStore } from "@reduxjs/toolkit";
import inputs_reducer from './reducers/inputs_filter'
import chapters_reducer from "./reducers/chapter_bar"

const store = configureStore({
    reducer: {
        inputs: inputs_reducer,
        title_order: chapters_reducer
    },
})

export default store


