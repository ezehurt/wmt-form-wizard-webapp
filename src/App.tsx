import React, { useEffect } from "react"
import { LaptopOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Button, Layout, Menu, theme } from "antd"
import { Counter } from "./features/counter/Counter"
import { getFlows } from "./services/flow/flow.service"

const { Content } = Layout

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  console.log(import.meta.env.VITE_BACKEND_API) // "123"
  const [flows, setFlows] = React.useState<MenuProps["items"] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFlows()
        const formatedData: MenuProps["items"] = data.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: any, index: number) => ({
            key: (index + 1).toString(),
            label: item.flow,
          }),
        )

        setFlows(formatedData)
      } catch (error) {
        // Handle error here
      }
    }
    fetchData()
  }, [])

  return flows ? (
    <Layout style={{ height: "100vh" }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={flows}
        style={{ flex: 1, minWidth: 0 }}
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
                <div>
                  <Counter />
                </div>
                <div>
                  <p>Widget2</p>
                </div>
                <div>
                  <p>Widget3</p>
                </div>
              </section>
              <section className="main-content__section">
                <div>Parameters panel</div>
              </section>
              <footer className="main-content__footer">
                <div>
                  <Button type="primary" icon={<LaptopOutlined />}>
                    QC
                  </Button>
                </div>
                <div>
                  <Button type="default">?</Button>
                  <Button type="default">Save</Button>
                  <Button type="primary">Run</Button>
                  <Button type="primary">Run to this</Button>
                </div>
              </footer>
            </main>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  ) : (
    <div>Loading...</div>
  )
}

export default App
