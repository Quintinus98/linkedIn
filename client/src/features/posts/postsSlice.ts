import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface postState {
  entities: string[];
  status: string;
}

const initialState: postState = {
  entities: [],
  status: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action: PayloadAction<string>) {
      // ✅ This "mutating" code is okay inside of createSlice!
      state.entities.push(action.payload);
    },
    postToggled(state, action) {
      // const post = state.entities.find(post => post.id === action.payload)
      // post.completed = !post.completed
    },
    postsLoading(state, action) {
      return {
        ...state,
        status: "loading",
      };
    },
  },
});

export const { postAdded, postToggled, postsLoading } = postsSlice.actions;

export default postsSlice.reducer;
