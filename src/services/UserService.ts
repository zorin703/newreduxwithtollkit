import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";




export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints(build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>): => ({
    fetchAllPosts: buid.query({
        query:() => ({
            url: '/posts'
        })
    })
    })
})