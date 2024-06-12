// handlers.ts
import { http, HttpResponse } from "msw"
import mockFlowsData from "../responses/w/m.json"
import flow1 from "../responses/w/w1.json"
import flow2 from "../responses/w/w2.json"
import flow3 from "../responses/w/w3.json"
import flow4 from "../responses/w/w4.json"

import { VITE_BACKEND_API } from "../../viteEnvImports"

type FlowParams = {
  id: string
}
type FlowResponseBody = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters: any // TODO
}

// src/mocks/handlers.js
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(`${VITE_BACKEND_API}/flows`, () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockFlowsData)
  }),
  http.get<FlowParams, FlowResponseBody>(
    `${VITE_BACKEND_API}/flows/:id`,
    async ({ params }) => {
      const { id } = params
      let response: FlowResponseBody | undefined
      console.log(id, "id")
      switch (id) {
        case "w1":
          response = {
            parameters: flow1,
          }
          break
        case "w2":
          response = {
            parameters: flow2,
          }
          break
        case "w3":
          response = {
            parameters: flow3,
          }
          break
        case "w4":
          response = {
            parameters: flow4,
          }
          break
        default:
          response = undefined
      }
      console.log("response in mock service worker", response)
      return HttpResponse.json(response)
    },
  ),
]
