import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import "./App.scss"
import { Provider } from "react-redux"
import { store } from "./app/store.ts"
import { VITE_APP_SERVER } from "./viteEnvImports.ts"

async function enableMocking() {
  if (VITE_APP_SERVER !== "msw" && process.env.NODE_ENV === "development") {
    return
  }
  const { worker } = await import("./mockServiceWorker.ts")
  return worker.start()
}

async function initializeApp() {
  await enableMocking()
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}

initializeApp()

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   enableMocking.then(() => (
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>
//   ))
//   // <React.StrictMode>
//   //   <Provider store={store}>
//   //     <App />
//   //   </Provider>
//   // </React.StrictMode>,
// )
