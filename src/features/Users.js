import { createSlice } from "@reduxjs/toolkit";


export const usersSlice = createSlice({
    name: "users",
    initialState: {
        value: [],
        reducers: {
            addUser: (state, action) => {
                // add user
            },
            removeUser: (state, action) => {            
                // remove user
            },
            updateUser: (state, action) => {
                // update user
            }   
        }
    }
});