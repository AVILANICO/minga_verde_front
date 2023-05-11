import { createReducer } from "@reduxjs/toolkit";
import chapter_actions from "../actions/chapter_bar"
// desestructuro la acciones que necesito configurar
const {chapter_bar} = chapter_actions;

let initial_state = {
    title: '',
    order: ''
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
    .addCase(
        chapter_bar,
        (state,actions) => {
            const new_state = {
                ...state,
                title: actions.payload.title,
                order: actions.payload.order
            }
            return new_state
        }
    )
)

export default reducer