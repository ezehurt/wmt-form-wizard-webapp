import React from "react"
import { Counter } from "../../../features/counter/Counter"
import { Button } from "antd"
import { LeftOutlined } from "@ant-design/icons"

type QCWidgetPanelProps = {
  text: string
}

const QCWidgetPanel: React.FC<QCWidgetPanelProps> = ({ text }) => {
  console.log(text)
  const handleCollapse = () => {
    console.log("colapse")
  }
  return (
    <section className="widget-panel">
      <div>
        <Counter />
      </div>
      <div>
        <p>Widget2</p>
      </div>
      <Button
        className="widget-panel__floating-btn"
        type="primary"
        size="small"
        icon={<LeftOutlined />} // TODO conditionally render based on horizontal arragement or vertical
        onClick={() => handleCollapse}
      />
    </section>
  )
}

export default QCWidgetPanel
