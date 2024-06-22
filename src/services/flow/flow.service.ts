import axios from "axios"
import { VITE_BACKEND_API } from "../../viteEnvImports"

// let flows: TManager = ;
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
