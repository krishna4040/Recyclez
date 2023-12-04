import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        signupData: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        removeToken: (state, token) => {
            state.token = null;
        },
        setSignupData: (state,action) => {
            state.signupData = action.payload;
        },
        setLocation: (state,action) => {
            state.signupData.location = action.payload;
        }
    }
});

export const { setToken, removeToken , setSignupData , setLocation } = userSlice.actions;
export default userSlice.reducer;