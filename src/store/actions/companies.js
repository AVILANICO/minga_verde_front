import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

const headers = () =>{
    let token = localStorage.getItem('token')
    return { headers: { 'Authorization': `Bearer ${token}` } }
}

const get_companies = createAsyncThunk('get_companies', async () => {
    try {
        let res = await axios(apiUrl + 'companies/admin', headers())
<<<<<<< HEAD
        console.log(res.data.companies)
=======
>>>>>>> 5c8649f410fc67069315d8fbac99edcfaddad2d6
        return {
            companies: res.data.companies
        }

    } catch (error) {
        return {
            companies: []
        }
    }
})

const update_companies = createAsyncThunk('update_companies', async ({ id, data }) => {
    try {
        let res = await axios.put(apiUrl + 'auth/role/company/' + id, data, headers())
<<<<<<< HEAD
        console.log(res.data.update)
=======
>>>>>>> 5c8649f410fc67069315d8fbac99edcfaddad2d6
        return {
            company: res.data.update,
            active: res.data.update.active
        }
    } catch (error) {
        return {
            companies: []
        }
    }
})

const actions = { get_companies, update_companies }

export default actions