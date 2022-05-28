import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "./constants";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getGithubAccount: builder.query({
      query: (query) => query.split(BASE_API_URL)[1] || "pokemon",
    }),
    getByParams: builder.query({
      query: (query) => query.split(BASE_API_URL)[1],
    }),
  }),
});

export default githubApi;
