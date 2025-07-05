import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
    reducerPath:"borrowApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints:(builder)=>({
        getBorrows: builder.mutation({
            query: (borrowBookData) => ({
                url:"/borrow",
                method:'POST',
                body:borrowBookData,
            }),

        })
    }
    )
})

export const {useGetBorrowsMutation} = borrowApi;