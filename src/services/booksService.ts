import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://www.googleapis.com/books/v1"}),
    endpoints: (builder) => ({
        getBooks: builder.query({
          query: ({searchTerm, startIndex, sorting, subject}) => `/volumes?q=${searchTerm}${subject === "all" ? "" : `+subject:${subject}`}&startIndex=${startIndex}&orderBy=${sorting}&printType=books&maxResults=30&key=AIzaSyBxoSZzSSe6XIMiSF4fOfHUU1ebKAiPUOM`,
        }),
    })
})

export const { useGetBooksQuery } = booksApi;