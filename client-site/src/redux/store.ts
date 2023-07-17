import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import usersSlice from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
