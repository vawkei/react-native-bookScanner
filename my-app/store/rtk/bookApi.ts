import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getToken = async () => {
  return await AsyncStorage.getItem("authToken");
};

const customBaseQuery = async (args: any, api: any, extraOptions: any) => {
  const token = await getToken();
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://192.168.43.52:8080",
    prepareHeaders: (headers) => {
      if (token) {
        headers.set("Authorization", ` ${token}`);
        console.log("customBaseQuery:", token);
      }
      return headers;
    },
  });
  return baseQuery(args, api, extraOptions);
};

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: customBaseQuery,
  tagTypes: ["book"],
  endpoints: (builder) => ({
    //👇👇==================getBooksFromDb=========================👇👇
    getBooks: builder.query({
      query: () => "/api/v1/google-book-api/get-books-from-db",
      providesTags: ["book"],
    }),

    // 👇👇==================saveSearchedBooksToDb=========================👇👇
    googleBooksAPI: builder.mutation({
      query: (text) => ({
        url: "/api/v1/google-book-api/get-book",
        // http://192.168.43.52:8080/api/v1/google-book-api/get-book
        method: "POST",
        body: { text },
      }),
      invalidatesTags: ["book"],
    }),

    // 👇👇==================saveSearchedBooksToDb=========================👇👇
    saveBookSearchedBooksToDb: builder.mutation({
      query: (books) => ({
        url: "/api/v1/google-book-api/save-book-to-db",
        method: "POST",
        body: { books },
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGoogleBooksAPIMutation,
  useGetBooksQuery,
  useSaveBookSearchedBooksToDbMutation,
} = bookApi;
