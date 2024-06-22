import axios from "axios"
import { VITE_BACKEND_API } from "../../viteEnvImports"
// import { TFlow } from "../../types/workflow/types"

export const getFlows = async () => {
  try {
    const { data } = await axios.get(`${VITE_BACKEND_API}/flows`)
    const flows = data.flows
    console.log(flows)
    return flows
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("axioserror", error)
    } else {
      console.log("error", error)
    }
  }
}

// export const getFlowById = async (id: string) => {
//   try {
//     const { data } = await axios.get<TFlow>(`${VITE_BACKEND_API}/flows/w${id}`)
//     console.log(data)
//     return data
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log("axioserror", error)
//     } else {
//       console.log("error", error)
//     }
//   }
// }
