import { Button } from "antd"
import { LaptopOutlined } from "@ant-design/icons"

type FooterProps = {
  text: string
  children?: React.ReactNode
}

export default function Footer({ text, children }: FooterProps) {
  console.log(text)
  return (
    <footer className="footer">
      <div>
        <Button type="primary" icon={<LaptopOutlined />}>
          QC
        </Button>
      </div>
      <div className="footer__button-groups">
        <Button type="default" className="footer__button-groups--first-btn">
          ?
        </Button>
        <Button type="default" className="footer__button-groups--second-btn">
          Save
        </Button>
        {children}
        <Button type="primary" className="footer__button-groups--third-btn">
          Run to this
        </Button>
      </div>
    </footer>
  )
}
