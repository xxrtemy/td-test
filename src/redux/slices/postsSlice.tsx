
import { PostItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsItems: [] as PostItem[],
    postId: null
  },
  reducers: {
    addPosts(state, action: { payload: PostItem[] }){
      state.postsItems = action.payload.map((post) => ({
        ...post,
        likes: Math.floor(Math.random() * 51),
        dislikes: Math.floor(Math.random() * 51),
        isLiked: false,
        isDisliked: false
      }));
    },
    incrementLikes(state, action) {
      const postId = action.payload;
      const postToLike = state.postsItems.find(post => post.id === postId);
      if (postToLike && !postToLike.isLiked) {
        postToLike.likes++;
        postToLike.isLiked = true;
        if (postToLike.isDisliked) {
          postToLike.dislikes--;
          postToLike.isDisliked = false;
        }
      }
    },
    
    incrementDislikes(state, action) {
      const postId = action.payload;
      const postToDislike = state.postsItems.find(post => post.id === postId);
      if (postToDislike && !postToDislike.isDisliked) {
        postToDislike.dislikes++;
        postToDislike.isDisliked = true;
        if (postToDislike.isLiked) {
          postToDislike.likes--;
          postToDislike.isLiked = false;
        }
      }
    },
    openPost(state, action){
      state.postId = action.payload
    }
    }
});

export const { addPosts, incrementLikes, incrementDislikes, openPost } = postsSlice.actions;

export default postsSlice.reducer;