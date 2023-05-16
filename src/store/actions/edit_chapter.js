import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api"

const edit_chatpter = createAsyncThunk('edit_chatpter', async() =>{
    try {
        let res = await axios(apiUrl + 'edit')
        console.log(res.data.response);
        return {
            chapters: res.data.response
        }
    } catch (error) {
        return {
            chapters: []
        }
    }
})

const delete_chatpter = createAsyncThunk('delete_chatpter', async([{id}]) =>{
    try {
        let token = localStorage.getItem('token');
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let res = await axios.delete(apiUrl + 'edit/' +id, headers)
        console.log(res);
        return {
            id: id,
        }
    } catch (error) {
        return {
            chapters: []
        }
    }
})

const update_chapter = createAsyncThunk('update_chapter', async({id})=>{
    try {
        let token = localStorage.getItem('token');
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let res = await axios.put(apiUrl + 'edit/' +id,data,headers)
        console.log(res);
        return {
            data:data,
        }
    } catch (error) {
        return{
            chapters: []
        } 
    }
})

const actions = {edit_chatpter, delete_chatpter, update_chapter}
export default actions