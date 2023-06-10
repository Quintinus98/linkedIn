import { createSlice } from "@reduxjs/toolkit";

interface commentState {
  entities: string[];
  status: string;
}

const initialState: commentState = {
  entities: [],
  status: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export default commentsSlice.reducer;
