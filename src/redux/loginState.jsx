import { createSlice } from "@reduxjs/toolkit";

export const loginDetails = createSlice({
    name:'loginDetails',
    initialState: {
      value: {
        username: "",
        password: "",
      },
    },
    reducers: {
        setLoginDetails: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {setLoginDetails}=loginDetails.actions
export default loginDetails.reducer