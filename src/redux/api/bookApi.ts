import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    createBooks: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["Books"],
    }),
    findOneBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    updateBook: builder.mutation({
      query: (updatedBookData) => ({
          url: `/books/${updatedBookData.id}`,
          method: "PATCH",
          body: updatedBookData,
      }),
      invalidatesTags: ["Books"]
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE"
      }),
      invalidatesTags:["Books"]
    }),
  }),
});

export const { useGetBooksQuery, useCreateBooksMutation, useFindOneBookQuery, useUpdateBookMutation, useDeleteBookMutation } =
  bookApi;
