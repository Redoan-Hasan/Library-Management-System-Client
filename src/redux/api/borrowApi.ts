import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-system-server-puce.vercel.app/api" }),
  tagTypes: ["borrows"],
  endpoints: (builder) => ({
    createBorrows: builder.mutation({
      query: (borrowBookData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowBookData,
      }),
      invalidatesTags: ["borrows"],
    }),
  getBorrows: builder.query({
    query: () =>({
      url: "/borrow",
    }),
    providesTags:["borrows"]
  }),
  }),
});

export const { useCreateBorrowsMutation, useGetBorrowsQuery } = borrowApi;
