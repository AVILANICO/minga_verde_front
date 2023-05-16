import { configureStore } from "@reduxjs/toolkit";
import chapters_reducer from "./reducers/chapter_bar"
import edit_chapter from './reducers/edit_chapter'

const store = configureStore({
    reducer: {
        title_order: chapters_reducer,
        chapters: edit_chapter
    }
})

export default store