import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Account } from "../models/Github/account";
import {
  BASE_API_URL,
  ACCOUNT_ENDPOINT,
  ACCOUNT_REPOS_ENDPOINT,
} from "./constants";

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getAccount: builder.query<Account, string>({
      query: (query) =>
        query.split(BASE_API_URL + ACCOUNT_ENDPOINT)[1] || "users/wilkrew",
    }),
    getAccountRepos: builder.query({
      query: (query) =>
        query.split(BASE_API_URL + ACCOUNT_REPOS_ENDPOINT)[1] ||
        "users/wilkrew/repos",
    }),
    getByParams: builder.query({
      query: (query) => query.split(BASE_API_URL)[1],
    }),
  }),
});

export default githubApi;
