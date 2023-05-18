import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/authors";


const { get_authors} = actions
let initialState = {
    getAuthors: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_authors.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    getAuthors: action.payload.authors
                }
                return newState
            }
        )
)



export default reducer