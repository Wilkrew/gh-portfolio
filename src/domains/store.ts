import { configureStore } from "@reduxjs/toolkit";
import { compose } from "redux";
import githubApi from "./api";

// https://stackoverflow.com/a/68212175
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const store = configureStore({
  reducer: { [githubApi.reducerPath]: githubApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

export default store;
