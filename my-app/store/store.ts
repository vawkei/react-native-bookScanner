import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./books/booksIndex";
import { authSlice } from "./auth/authIndex";
import { authApi } from "./rtk/authApi";
import { bookApi } from "./rtk/bookApi";

export const store = configureStore({
  reducer: {
    // slices:
    auth: authSlice.reducer,
    book: bookSlice.reducer,

    // rtk:
    [authApi.reducerPath]: authApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
