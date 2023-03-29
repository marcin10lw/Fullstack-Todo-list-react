import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
  },
  reducers: {
    setImages: (state, { payload: images }) => {
      state.images = images;
    },
  },
});

export const { setImages } = imagesSlice.actions;

const selectImagesState = (state) => state.images;
export const selectImages = (state) => selectImagesState(state).images;
export const selectImagesByTaskId = (state, taskId) => {
  if (!taskId) {
    return [];
  }

  return selectImages(state).filter((image) => image.taskId === taskId);
};

export default imagesSlice.reducer;
