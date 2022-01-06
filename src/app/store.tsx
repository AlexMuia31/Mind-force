import { configureStore } from '@reduxjs/toolkit'
import { photosApi } from '../services/api'
//in this file we are binding the Api to the store

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice

        [photosApi.reducerPath]: photosApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(photosApi.middleware),
})