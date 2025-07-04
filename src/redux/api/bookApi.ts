import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api"}),
  endpoints:(builder) =>({
    getBooks: builder.query({
        query: () => "/books",
    }),
    createBooks: builder.mutation({
        query:(bookData)=>({
            url:"/books",
            method:'POST',
            body:bookData,
        })
    }),
    findOneBook: builder.query({
      query:(id)=> `/books/${id}`,
    })
  })
})

export const {useGetBooksQuery, useCreateBooksMutation, useFindOneBookQuery} = bookApi;