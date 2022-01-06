import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://jsonplaceholder.typicode.com'; //base url for our api calls

export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPhotos: builder.query({
            query: () => '/photos'  // this is the endpoint
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useGetPhotosQuery } = photosApi