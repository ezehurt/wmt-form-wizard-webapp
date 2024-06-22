/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAPI, TFlow } from "./types"

const api: TAPI[] = [
  {
    name: "refreshQCWidget1",
    func: "imagemani.py",
    type: "QC",
  },
  {
    name: "imageManiExec",
    func: "imagemani.py", //Single Python file
    type: "Execution",
  },
]
const version = "1.0"
const parameters4: any = {
  title: "Image Processing",
  // description: "Workflow demo form",
  type: "object",
  uiSchema: {
    "ui:grid": [
      { paramSection: { cols: 8 }, qcSection: { cols: 16 } }, // 2 cột
    ],
    "ui:options": { label: false, align: true, col: 24, grid: true },
  },
  properties: {
    qcSection: {
      type: "object",
      uiSchema: {
        "ui:grid": [
          {
            trainTrackImage: { cols: 12 },
            processingWindowLimit: { cols: 12 },
          },
        ],
        "ui:options": { label: true, align: false, col: 24, grid: true },
      },
      properties: {
        trainTrackImage: {
          type: "string",
          uiSchema: {
            "ui:options": { label: true, align: false, col: 24, grid: true },
          },
        },
        processingWindowLimit: {
          type: "string",
          uiSchema: {
            "ui:options": { label: true, align: false, col: 24, grid: true },
          },
        },
      },
    },
    paramSection: {
      type: "object",
      uiSchema: {
        "ui:grid": [
          { input: { cols: 24 } },
          { qcParameters: { cols: 24 } },
          { mainParameters: { cols: 24 } },
          { output: { cols: 24 } },
        ],
        "ui:options": { label: true, align: false },
      },
      properties: {
        input: {
          type: "object",
          title: "Input data",
          uiSchema: {
            "ui:grid": [
              { selectImageSet: { cols: 24 } },
              { listOfImageToProcess: { cols: 24 } },
              { selectPolygonSet: { cols: 24 } },
            ],
            "ui:options": { label: true, align: false, accordion: true },
          },
          properties: {
            selectImageSet: {
              type: "string",
              title: "Select image set",
            },
            listOfImageToProcess: {
              type: "string",
              title: "List of images to Process",
            },
            selectPolygonSet: {
              type: "string",
              title: "Select polygon set",
            },
          },
        },
        qcParameters: {
          type: "object",
          title: "QC parameter",
          uiSchema: {
            "ui:grid": [{ listOfImageToQC: { cols: 24 } }],
            "ui:options": { label: true, align: false, accordion: true },
          },
          properties: {
            listOfImageToQC: {
              type: "string",
              title: "List of images to QC",
            },
          },
        },
        mainParameters: {
          type: "object",
          title: "Main Parameters",
          uiSchema: {
            "ui:grid": [{ color: { cols: 24 } }],
            "ui:options": { label: true, align: false, accordion: true },
          },
          properties: {
            color: {
              type: "object",
              title: "Color",
              uiSchema: {
                "ui:grid": [
                  { brightness: { cols: 20 }, autoButton: { cols: 4 } },
                  { bw: { cols: 24 } },
                  { contrast: { cols: 24 } },
                ],
                "ui:options": { label: true, align: false },
              },
              properties: {
                brightness: {
                  type: "integer",
                  minimum: -50,
                  maximum: 50,
                  title: "Brightness",
                  uiSchema: {
                    "ui:widget": "range",
                    "ui:options": { col: 8, trigger: "onChangeBrightness" },
                  },
                },
                bw: {
                  type: "number",
                  title: "B/W?",
                  oneOf: [
                    {
                      const: 1,
                      title: "Black and White",
                    },
                    {
                      const: 2,
                      title: "Sepia",
                    },
                    {
                      const: 3,
                      title: "Full Color",
                    },
                  ],
                  uiSchema: {
                    "ui:widget": "radio",
                    "ui:options": { col: 8 },
                  },
                },
                autoButton: {
                  type: "boolean",
                  uiSchema: {
                    "ui:widget": "autoButton",
                    "ui:options": {
                      label: false,
                      triggerName: "autoBrightness",
                    },
                  },
                },
                contrast: {
                  type: "number",
                  title: "Contrast",
                  uiSchema: {
                    "ui:options": { col: 8 },
                  },
                },
              },
            },
          },
        },
        output: {
          uiSchema: {
            "ui:grid": [
              { outputToSubFolder: { cols: 24 } },
              { outputImageSetName: { cols: 24 } },
            ],
            "ui:options": {
              label: true,
              align: false,
              col: 24,
              grid: true,
              accordion: true,
            },
          },
          type: "object",
          title: "Output data",
          properties: {
            outputToSubFolder: {
              type: "number",
              title: "Output to Sub folder",
              oneOf: [
                {
                  const: 1,
                  title: "Yes",
                },
                {
                  const: 2,
                  title: "No",
                },
              ],
              uiSchema: {
                "ui:widget": "radio",
              },
            },
            outputImageSetName: {
              type: "string",
              title: "Output image set name",
            },
          },
        },
      },
    },
  },
}
const w4: TFlow = {
  id: "flow4",
  api,
  version,
  parameters: parameters4,
}

export default w4
