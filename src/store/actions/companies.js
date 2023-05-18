import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

let token = localStorage.getItem("token")
let headers = { headers: { "Authorization": `Bearer ${token}` } }


const get_companies = createAsyncThunk('get_companies', async () => {
    try {
        let res = await axios(apiUrl + 'companies/admin',headers)
        console.log(res.data.companies)
        return {
            companies: res.data.companies
        }

    } catch (error) {
        return {
            companies: []
        }
    }
})

const actions = { get_companies}

export default actions