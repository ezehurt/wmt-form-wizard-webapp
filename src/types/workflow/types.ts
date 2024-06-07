/* eslint-disable @typescript-eslint/no-explicit-any */
import { RJSFSchema, UiSchema } from "@rjsf/utils"

// Định nghĩa một interface mở rộng của RJSFSchema với thêm trường uiSchema
export interface WSchema extends RJSFSchema {
  uiSchema?: any
}

export type TAPIType = "QC" | "Execution"
/**
 * Define API: name, python function, request type, for QC or for Flow Execution, response format.
 */
export interface TAPI {
  /**
   * API name. E.g. Execution, SelectPolygon, SelectSaturation, AutoBrightness,...
   */
  name: string
  /**
   * python name
   */
  func: string // e.g: "imagemani.py"
  /**
   * type: Execution or QC
   * Execution: called when user click Run to execution the flow.
   * QC: called when user changed widgets to select/adjust parameters
   * Each Widget has its own QC API.
   */
  type: TAPIType
}
//==== Define polygon.
/**
 * list of Widget Types.
 */
export type TStatus =
  | "disabled" // Disabled.
  | "running" //  Running.
  | "executed" // Already done.
  | "unexecuted" // Standby, waiting to be executed.

/**
 * TFlow
 * Each Flow is associated with a template flow file of a json type that specify
 * 	- the flow visual layout and
 * 	- list of parameters (including possible parameter trigger)
 *	- List of QC Widget triggers
 * Define flow properties: name, layout, APIs, flows.
 */
export interface TFlow {
  id: string // Flow's uuid.
  api: TAPI[] // QC API and Execution API.
  parameters?: RJSFSchema | any
  version: string
}

export interface TManager {
  flows: {
    flow: string // Flow id
    status: TStatus // TODO
  }[]
}

export interface TParametricConfig {
  triggerSource: string
  formData: any
}

export const generateData = (
  json: any,
  isRoot: boolean = false,
): { schema: RJSFSchema; uiSchema: UiSchema } => {
  const schema: any = {}
  let uiSchema: any = false

  // eslint-disable-next-line no-prototype-builtins
  if (json.hasOwnProperty("uiSchema")) {
    uiSchema = json.uiSchema
  }
  // { type, properties, uiScheme,... }
  for (const [key, value] of Object.entries(json)) {
    if (key === "properties") {
      schema[key] = {}
      // { property: value }
      for (const [p, val] of Object.entries(value as any)) {
        const o: any = generateData(val)
        schema[key][p] = o.schema
        if (o.uiSchema) {
          if (!uiSchema) {
            uiSchema = { [p]: o.uiSchema }
          } else {
            uiSchema[p] = o.uiSchema
          }
        }
      }
    } else if (key !== "uiSchema") {
      schema[key] = value
    }
  }

  if (isRoot && uiSchema["ui:options"]) {
    const options = JSON.parse(JSON.stringify(uiSchema["ui:options"]))
    uiSchema.root = { "ui:options": options }
    delete uiSchema["ui:options"]
  }

  return { schema, uiSchema }
}
