import { Button } from "antd"
import React from "react"
import { LaptopOutlined } from "@ant-design/icons"

type FooterProps = {
  text: string
}

export default function Footer({ text }: FooterProps) {
  console.log(text)
  return (
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
  )
}
