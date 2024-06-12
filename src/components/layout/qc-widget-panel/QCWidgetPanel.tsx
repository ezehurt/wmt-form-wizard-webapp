import React from "react"
import { Button } from "antd"
import { RightOutlined } from "@ant-design/icons"
// import Form from "@rjsf/antd";
// import validator from "@rjsf/validator-ajv8";
// Make modifications to the theme with your own fields and widgets

type QCWidgetPanelProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const QCWidgetPanel: React.FC<QCWidgetPanelProps> = ({ params, data }) => {
  console.log("QCWidgetPanel", data.data, params)
  const handleCollapse = () => {
    console.log("colapse")
  }
  return (
    <section className="widget-panel">
      {/* <Form schema={params.schema} formData={data.data.formData} validator={validator} /> */}
      <Button
        className="widget-panel__floating-btn"
        type="primary"
        size="small"
        icon={<RightOutlined />} // TODO conditionally render based on horizontal arragement or vertical
        onClick={() => handleCollapse}
      />
    </section>
  )
}

export default QCWidgetPanel
