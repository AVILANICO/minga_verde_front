import { configureStore } from "@reduxjs/toolkit";
import reducer_one_manga from './reducers/one_manga.js'
import reducer_one_chapter from './reducers/one_chapter.js'
import inputs_reducer from './reducers/inputs_filter'
import chapters_reducer from "./reducers/chapter_bar"

const store = configureStore({
  reducer: {
    one_manga: reducer_one_manga,
    one_chapter: reducer_one_chapter,
    inputs: inputs_reducer,
    title_order: chapters_reducer
  }
})
export default store;



