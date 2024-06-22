import { Spin } from "antd"
import React from "react"

const Footer: React.FC = () => {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  )
}

export default Footer
