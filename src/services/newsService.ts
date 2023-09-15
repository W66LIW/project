import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INews } from '../types/INews';

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://worldnewsapi.com"}),
    endpoints: (builder) => ({
        getAllNews: builder.query({
            query: () => "/downloads/world-news-api-openapi-3.json"
        })
    })
})

export const { useGetAllNewsQuery } = newsApi;