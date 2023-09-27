import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://www.googleapis.com/books/v1"}),
    endpoints: (builder) => ({
        getBooks: builder.query({
          query: (searchTerm) => `/volumes?q=${searchTerm}&key=AIzaSyAvEaW_gHWUaU0xn1UQwD-PpFt9ABC3BJ8&maxResults=40&keyAIzaSyAvEaW_gHWUaU0xn1UQwD-PpFt9ABC3BJ8`,
        }),
    })
})

export const { useGetBooksQuery } = booksApi;