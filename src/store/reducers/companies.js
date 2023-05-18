import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/companies";


const { get_companies} = actions
let initialState = {
    getCompanies: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        get_companies.fulfilled,
        (state, action) => {
            let newState = {
                ...state,
                getCompanies: action.payload.companies
            }
            return newState
        }
    )
)
    

export default reducer