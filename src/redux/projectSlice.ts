import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProjectState } from "../types";
import axios, { AxiosError } from "axios";
import API from "../api";

type initialStateType = {
    projectList: ProjectState[];
    currentPage: Number,
    numberOfPages: Number,
    error: String,
    loading: Boolean,
};

const initialState: initialStateType = {
    projectList: [],
    currentPage: 1,
    numberOfPages: 0,
    error: "",
    loading: false,
}

// https://github.com/kuldippanchal2000/redux_toolkit_with_typescript
// https://dev.to/julfikarhaidar/redux-toolkit-crud-example-with-react-hooks-4d98 **

export const fetchProjects = createAsyncThunk("getProjects", async () => {
    
    return API.get("/projects")
      .then((response) => {
        return response.data;
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          return err.response
        } else {
          return err;
        }
      })
  });

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectList: (state, action: PayloadAction<ProjectState[]>) => {
      state.projectList.concat(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProjects.fulfilled, (state, action) => {
      state.projectList = action.payload;
    })
  }
});
export const { setProjectList } = projectSlice.actions;
export const selectProjectList = (state: RootState) => state.projects.projectList;
export default projectSlice.reducer;