import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../slices/users/userSlice";
import alertReducer from "../slices/modals/sideDrawerSlice";
import toastReducer from "../slices/modals/toastSlice";
import loaderReducer from "../slices/modals/loaderSlice";
import sideDrawerReducer from "../slices/modals/sideDrawerSlice";
import bottomSheetReducer from "../slices/modals/bottomSheetSlice";
import popupModalReducer from "../slices/modals/popupSlice";

import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
  userData: userReducer,
  alert: alertReducer,
  loader: loaderReducer,
  bottomSheet: bottomSheetReducer,
  sideDrawer: sideDrawerReducer,
  toast: toastReducer,
  popupModal: popupModalReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["usersData", "users"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
