import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://jsonplaceholder.typicode.com'; //base url for our api calls

export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPhotos: builder.query({
            query: () => `/photos?_limit=111`  // getting all photos and limiting to 111 items

        }),
        getPhoto: builder.query({
            query: (id) => `/photos/${id}` //getting an individual photo by id
        }),
        updatePhoto: builder.mutation({   //updating method (Editing)
            query: ({ id, ...rest }) => ({
                url: `photos/${id}`,
                method: 'PUT',
                body: rest
            })
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useGetPhotosQuery, useGetPhotoQuery, useUpdatePhotoMutation } = photosApi