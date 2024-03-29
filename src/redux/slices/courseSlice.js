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
});

export const deleteCourse = createAsyncThunk("/course/delete", async (id) => {
    try {
        console.log(id);
        const response = axiosInstance.delete(`/course/${id}`);
        toast.promise(response, {
            loading: "deleting course ...",
            success: "Courses deleted successfully",
            error: "Failed to delete the courses",
        });
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

export const createNewCourse = createAsyncThunk("/course/create" , async (data) => {
    try {
        const formData = new FormData();

        formData.append("title" , data?.title);
        formData.append("description" , data?.description);
        formData.append("createdBy" , data?.createdBy);
        formData.append("category" , data?.category);
        formData.append("thumbnail" , data?.thumbnail);

        const response = axiosInstance.post("/course" , formData);

        toast.promise(response , {
            loading: 'Wait! creating new course',
            success: (data) => {
                return data?.data?.message;
            },
            error: 'Failed to create course'
        });

        return (await response).data;
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