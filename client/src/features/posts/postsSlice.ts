import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface postState {
  entities: {
    [key: string]: any;
  };
  status: string;
}

const initialState: postState = {
  entities: {},
  status: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action: PayloadAction<any>) {
      const post = action.payload;
      // ✅ This "mutating" code is okay inside of createSlice!
      state.entities[post.id] = post;
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
