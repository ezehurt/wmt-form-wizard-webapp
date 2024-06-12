import Form from "@rjsf/antd"
import validator from "@rjsf/validator-ajv8"

type ParametersPanelProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const ParametersPanel: React.FC<ParametersPanelProps> = ({
  params,
  data,
}: ParametersPanelProps) => {
  console.log("PARAMS", params)
  console.log("PARAMS", params.schema)
  console.log("parameterspanelData", data)

  return (
    params &&
    data && (
      <div className="parameters-panel">
        <Form
          schema={params.schema}
          uiSchema={params.schema}
          formData={data.data.formData}
          validator={validator}
          onChange={e => console.log(e)}
          onSubmit={e => console.log(e)}
          children={true}
        ></Form>
      </div>
    )
  )
}

export default ParametersPanel
