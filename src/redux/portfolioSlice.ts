import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SocialMediaType, ProjectType, UserType, SkillType } from "../types";
import axios, { AxiosError } from "axios";
import API from "../api";

type initialStateType = {
    isLoading:Boolean,
    projectList: Array<ProjectType>,
    socialMediaList: Array<SocialMediaType>,
    skillList: Array<SkillType>,
    data: UserType,
    error:String

};

const initialState: initialStateType = {
  projectList: [],
  error: "",
  isLoading: true,
  socialMediaList: [],
  skillList: [],
  data: {
    _id: undefined,
    first_name: "",
    last_name: "",
    email: "",
    title: undefined,
    headline: "",
    description: "",
    profile_file: "",
    background_file: "",
    resume_link: "",
    location: ""
  }
}

// https://github.com/kuldippanchal2000/redux_toolkit_with_typescript
// https://dev.to/julfikarhaidar/redux-toolkit-crud-example-with-react-hooks-4d98 **

export const fetchPortfolio = createAsyncThunk("getUserData", async () => {
    return API.get(`/user/web/${process.env.REACT_APP_USER_EMAIL}`)
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

export const portfolioSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProjectList: (state, action: PayloadAction<ProjectType[]>) => {
      state.projectList.concat(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPortfolio.fulfilled, (state, action) => {
      const userData = {...action.payload};
      delete userData["skill_list"];
      delete userData["project_list"];
      delete userData["social_media_list"];
      
      state.data = {...userData};
      state.skillList = [...action.payload["skill_list"]]
      state.projectList = [...action.payload["project_list"]]
      state.socialMediaList = [...action.payload["social_media_list"]]
      state.isLoading=false;
      state.error = "";

    })
    .addCase(fetchPortfolio.pending, (state, action) => {
      state.isLoading=true;
      state.error = "";
    })
    .addCase(fetchPortfolio.rejected, (state, action) => {
      state.isLoading=false;
      state.error = String(action.payload);
    })
  }
});
export const { setProjectList } = portfolioSlice.actions;
export const selectProjectList = (state: RootState) => state.projects.projectList;
export default portfolioSlice.reducer;