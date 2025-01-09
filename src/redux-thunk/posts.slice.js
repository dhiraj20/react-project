import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {sub} from 'date-fns';
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', failed
  error: null
}

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return response.data;
// });


export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POST_URL);
    console.log(response);
    return [...response.data];
  } catch(err) {
    return err.message;
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
    .addCase(fetchPosts.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      let min = 1;
      const loadedPosts = action.payload.map(post => {
        // post.date = sub(new Date(), {minutes: min++}).toISOString(),
        post.reactions = {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0
        }
        return post;
      })
      // add any fetched post to the array
      state.posts = state.posts.concat(loadedPosts)
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message
    })
}
})

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default postsSlice.reducer;
