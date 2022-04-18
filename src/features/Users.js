import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const usersSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
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
});