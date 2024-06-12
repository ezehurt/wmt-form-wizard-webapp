import React from "react"

type Props = {
  text: string
}

const ParametersPanel: React.FC<Props> = ({ text }: Props) => {
  console.log(text)
  return <div className="parameters-panel"></div>
}

export default ParametersPanel
