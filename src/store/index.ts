
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import projectsReducer from "./projectsSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
