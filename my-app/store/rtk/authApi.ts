import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.43.52:8080",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    // 👇👇===================REGISTER===========================👇👇
    register: builder.mutation({
      query: ({ userData }) => ({
        url: "/api/v1/auth/register",
        method: "POST",
        body: {
          name: userData.enteredName,
          email: userData.enteredEmail,
          password: userData.enteredPassword,
        },
      }),
      invalidatesTags: ["auth"],
    }),
    // 👇👇===================LOGIN===========================👇👇
    login: builder.mutation({
      query: ({ userData }) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: { email: userData.enteredEmail, password: userData.enteredPassword },
      }),
      invalidatesTags: ["auth"],
    }),
    // 👇👇===================LOGOUT=========================👇👇
    logout: builder.mutation({
      query: () => ({
        url: "/api/v1/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {useRegisterMutation,useLoginMutation,useLogoutMutation} = authApi;
