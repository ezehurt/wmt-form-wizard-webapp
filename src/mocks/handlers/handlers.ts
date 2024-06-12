// handlers.ts
import { http, HttpResponse } from "msw"
import mockFlowsData from "../responses/w/m.json"
import flow1 from "../responses/w/w1.json"
import flow2 from "../responses/w/w2.json"
import flow3 from "../responses/w/w3.json"
import flow4 from "../responses/w/w4.json"
import params1 from "../responses/w/p1.json"
import params2 from "../responses/w/p2.json"
import params3 from "../responses/w/p3.json"
import params4 from "../responses/w/p4.json"

import { VITE_BACKEND_API } from "../../viteEnvImports"

type FlowParams = {
  id: string
}
type FlowResponseBody = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters: any // TODO
}
type FlowParamsBody = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
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
      return HttpResponse.json(response)
    },
  ),
  http.get<FlowParams, FlowParamsBody>(
    `${VITE_BACKEND_API}/params/:id`,
    async ({ params }) => {
      const { id } = params
      let response: FlowParamsBody | undefined
      console.log(id, "id")
      switch (id) {
        case "p1":
          response = {
            data: params1,
          }
          break
        case "p2":
          response = {
            data: params2,
          }
          break
        case "p3":
          response = {
            data: params3,
          }
          break
        case "p4":
          response = {
            data: params4,
          }
          break
        default:
          response = undefined
      }
      return HttpResponse.json(response)
    },
  ),
]
