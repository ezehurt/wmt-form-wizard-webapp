/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "@rjsf/antd"
import {
  FormContextType,
  IdSchema,
  ObjectFieldTemplateProps,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils"
import validator from "@rjsf/validator-ajv8"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import {
  selectRootChildren,
  setRootChildren,
} from "../../../features/counter/counterSlice"
import { useEffect } from "react"
import withCollapsible from "../withCollapsible"
import { Button } from "antd"
import Footer from "../footer/Footer"

type ParametersPanelProps = {
  params: any
  data: any
}

export function isRootId(schema: IdSchema): boolean {
  return schema.$id === "root"
}

export function getRootChildIds(schema: IdSchema): string[] {
  const childIds: string[] = []

  // Iterate over the properties of the schema
  for (const key in schema) {
    if (Object.prototype.hasOwnProperty.call(schema, key)) {
      const schemaItem = schema[key] // Assign schema[key] to a variable
      if (schemaItem && typeof schemaItem === "object" && "$id" in schemaItem) {
        childIds.push((schemaItem as { $id: string })["$id"])
      }
    }
  }

  return childIds
}

interface WMTObjectFieldTemplateProps<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
> extends ObjectFieldTemplateProps<T, S, F> {
  isCollapsible?: boolean // Add your custom property here
}

function ObjectFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: WMTObjectFieldTemplateProps<T, S, F>) {
  console.log("PROPS", props)
  const isVertical = true
  const isRoot = isRootId(props.idSchema)
  const dispatch = useAppDispatch()
  // const count = useAppSelector(selectCount)
  const rootChildren = useAppSelector(selectRootChildren)
  // console.log("rootChildren", rootChildren)

  useEffect(() => {
    if (isRoot) {
      const children = getRootChildIds(props.idSchema)
      console.log("children", children)
      dispatch(setRootChildren(children))
      // dispatch(increment(rootChildren))
    }
  }, [])

  return (
    <div
      className={`form-main-container--${isVertical ? "vertical" : "horizontal"}`}
    >
      <div>
        {props.title}
        {props.description}
        {props.properties.map((element, index) => (
          <div key={index} className="property-wrapper">
            {element.content}
          </div>
        ))}
      </div>
      {rootChildren.includes(props.idSchema.$id) && <div>hola</div>}
    </div>
  )
}

const CollapsibleMyComponent = withCollapsible(ObjectFieldTemplate)

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
      <div className="wmt-form-wizard">
        <Form
          schema={params.schema}
          uiSchema={params.schema}
          formData={data.data.formData}
          validator={validator}
          templates={{ ObjectFieldTemplate: CollapsibleMyComponent }}
          onChange={e => console.log(e)}
          onSubmit={e => console.log(e)}
          className="wmt-form-wizard__container"
          // children={true} // uncomment this for buttons to show
        >
          <Footer text="hola">
            <Button
              type="primary"
              htmlType="submit"
              className="footer__button-groups--submit-btn"
            >
              Run
            </Button>
          </Footer>
        </Form>
      </div>
    )
  )
}

export default ParametersPanel
