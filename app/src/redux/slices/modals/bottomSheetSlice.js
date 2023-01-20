import {createSlice} from '@reduxjs/toolkit';
const initialState = {visible: false, title: '', message: ''};

export const bottomSheetSlice = createSlice({
  name: 'bottomSheet',
  initialState,
  reducers: {
    updateBottomSheet: (state, action) => (state = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const {updateBottomSheet} = bottomSheetSlice.actions;

export default bottomSheetSlice.reducer;
