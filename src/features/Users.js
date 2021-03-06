import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
        reducers: {
            addUser: (state, action) => {
                state.value.push(action.payload);
            },
            removeUser: (state, action) => {            
                state.value = state.value.filter(user => user.id !== action.payload.id);
            },
            updateUser: (state, action) => {
                state.value = state.value.map(user => {
                    if (user.id === action.payload.id) {
                        user.username = action.payload.username;
                    }
                    return user;
                });
            }   
        }
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
