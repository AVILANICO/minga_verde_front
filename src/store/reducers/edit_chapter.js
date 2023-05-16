import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/edit_chapter";
const { edit_chatpter, delete_chatpter, update_chapter} = actions

let initialState = {
    chapters: [],
}

const reducer = createReducer(
    initialState,
    builder => builder
    .addCase(
        edit_chatpter.fulfilled,
        (state, action) =>{
            let newState = {
                ...state,
                chapters: action.payload.chapters
            }
            return newState
        }
    )
    .addCase(
        delete_chatpter.fulfilled,
        (state, action) =>{
            let newState = {
                ...state,
                chapters: state.chapters.filter(each => each._id === action.payload.id)
            }
            return newState
        }
    )
    .addCase(
        update_chapter.fulfilled,
        (state, action) =>{
            let newState = {
                ...state,
                chapters: state.chapters.map(each =>{
                    if(each._id === action.payload.id){
                        return action.payload.data
                    }else{
                        return each
                    }
                })
            }
            return newState
        }
    )
)

export default reducer