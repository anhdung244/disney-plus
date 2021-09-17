import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisneys: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.recommend = action.payload.recommend;
      state.newDisneys = action.payload.newDisneys;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
