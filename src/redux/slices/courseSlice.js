import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    courseList: []
}

export const getAllCourses = createAsyncThunk("/course/getAllCourses" , async () => {
    try {
        const response = axiosInstance.get("/course");

        toast.promise(response , {
            loading: 'Wait! fetching all courses',
            success: (data) => {
                return data?.data?.message;
            },
            error: 'Failed to load courses'
        });

        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(getAllCourses.fulfilled , (state , action) => {
            console.log(action);
            if(action?.payload){
                state.courseList = [...action.payload.data.courses];
            }
        })
    }
});

export default courseSlice.reducer;