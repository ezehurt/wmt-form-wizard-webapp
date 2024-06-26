// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { VITE_BACKEND_API } from "../../viteEnvImports"

// Define a service using a base URL and expected endpoints
export const flowParamApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${VITE_BACKEND_API}` }),
  reducerPath: "flowParamApi",
  // Tag types are used for caching and invalidation.
  tagTypes: ["FlowParam"],
  endpoints: build => ({
    getFlowParamById: build.query<unknown, string>({
      query: id => `/params/p${id}`,
      providesTags: (result, error, id) => [{ type: "FlowParam", id }],
    }),
  }),
})

// Hooks are auto-generated by RTK-Query
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useGetFlowParamByIdQuery } = flowParamApiSlice
