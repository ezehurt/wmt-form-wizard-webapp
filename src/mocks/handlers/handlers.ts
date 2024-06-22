// handlers.ts
import { http, HttpResponse } from "msw"
import mockFlowsData from "../responses/w/m.json"
import { VITE_BACKEND_API } from "../../viteEnvImports"

// src/mocks/handlers.js
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`${VITE_BACKEND_API}/flows`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockFlowsData)
  }),
]
