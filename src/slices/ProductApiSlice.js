import { PRODUCT_URL } from "../constant";
import { apiSlice } from "./apiSlices";


export const productApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>({
                url:PRODUCT_URL
            }),
            keepUnusedDataFor:5
        })
    })
})

export const { useGetProductQuery} = productApiSlice