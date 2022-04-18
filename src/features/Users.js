import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
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


export default userSlice.reducer;
