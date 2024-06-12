import React, { useEffect } from "react"
import type { MenuProps } from "antd"
import { Layout, Menu, theme } from "antd"
import Footer from "./components/layout/footer/Footer"
import Loader from "./components/loader/Loader"
import QCWidgetPanel from "./components/layout/qc-widget-panel/QCWidgetPanel"

import ParametersPanel from "./components/layout/parameters-panel/ParametersPanel"
import {
  useGetFlowTemplateByIdQuery,
  useGetFlowTemplatesQuery,
} from "./store/api/flowTemplateApiSlice"
import { useGetFlowParamByIdQuery } from "./store/api/flowParamsApiSlice"

const { Content } = Layout
const DEFAULT_FLOW_ID = "2"

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const [flows, setFlows] = React.useState<MenuProps["items"] | null>(null)
  const [selectedFlow, setSelectedFlow] = React.useState(DEFAULT_FLOW_ID)
  const { data, isError, isLoading, isSuccess } =
    useGetFlowTemplateByIdQuery(selectedFlow)
  const { data: flowData, isSuccess: isSuccesFlow } = useGetFlowTemplatesQuery()
  const { data: paramsData, isSuccess: isSuccessParams } =
    useGetFlowParamByIdQuery(selectedFlow)

  useEffect(() => {
    // Load here the flows: check if there is any other way to load the flows. It seems that this is the status of the flows
    if (isSuccesFlow) {
      const formatedData: MenuProps["items"] = flowData.flows.map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any, index: number) => ({
          key: (index + 1).toString(),
          label: item.flow,
        }),
      )
      setFlows(formatedData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccesFlow])

  useEffect(() => {
    if (data) console.log("data", data)
  }, [data, selectedFlow])

  useEffect(() => {
    // Load here the flows: check if there is any other way to load the flows. It seems that this is the status of the flows
    if (isSuccessParams) {
      console.log("paramsData", paramsData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccesFlow])

  useEffect(() => {
    if (data) console.log("data", data)
  }, [data, selectedFlow])

  const handleMenuClick: MenuProps["onClick"] = e => {
    setSelectedFlow(`${e.key}`)
  }

  if (isLoading) return <Loader />
  if (isError) return <div>There was an error!!!</div>

  return (
    flows &&
    isSuccess && (
      <Layout style={{ height: "100vh" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectedFlow]}
          items={flows}
          onClick={handleMenuClick}
        />
        <Layout>
          <Layout style={{ padding: "24px", height: "100%" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,

                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <main className="main-content">
                <section className="main-content__section">
                  <QCWidgetPanel
                    params={data?.parameters}
                    data={paramsData as unknown}
                  ></QCWidgetPanel>
                  <ParametersPanel
                    params={data?.parameters}
                    data={paramsData as unknown}
                  />
                  {/* <div>
                    <Quotes></Quotes>
                  </div> */}
                </section>
                <Footer text="footer"></Footer>
              </main>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  )
}

export default App
