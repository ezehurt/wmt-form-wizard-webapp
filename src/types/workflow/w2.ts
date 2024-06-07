import { TAPI, TFlow, TParametricConfig } from "./types"

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
const parameters2: unknown = {
  title: "Image Processing",
  // description: "Workflow demo form",
  type: "object",
  uiSchema: {
    "ui:grid": [
      { paramSection: { cols: 14 }, qcSection: { cols: 10 } }, // 2 cột
    ],
    "ui:options": { label: false, align: true, col: 24, grid: true },
  },
  properties: {
    qcSection: {
      type: "object",
      uiSchema: {
        "ui:grid": [
          { trainTrackImage: { cols: 24 } },
          { processingWindowLimit: { cols: 24 } },
        ],
        "ui:options": { label: true, align: false, col: 24, grid: true },
      },
      properties: {
        trainTrackImage: {
          type: "string",
          uiSchema: {
            "ui:options": { label: true, align: false, col: 24 },
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
          { inputData: { cols: 24 } },
          { mainParameters: { cols: 24 } },
          { outputData: { cols: 24 } },
        ],
        "ui:options": { label: true, align: false },
      },
      properties: {
        inputData: {
          type: "object",
          title: "Input data",
          uiSchema: {
            "ui:grid": [
              { inputImageSet: { cols: 12 } },
              { processImageSet: { cols: 12 } },
              { inputPolygonSet: { cols: 12 } },
              { qcImageSet: { cols: 12 } },
            ],
            "ui:options": { label: true, align: false },
          },
          properties: {
            inputImageSet: {
              type: "string",
              title: "Input image set",
              // uiSchema: {
              //   "ui:options": {align: false, accordion: true},
              // },
            },
            inputPolygonSet: {
              type: "string",
              title: "Polygon set",
            },
            processImageSet: {
              type: "string",
              title: "Process image set",
              enum: ["House", "Human", "Landscape"],
            },
            qcImageSet: {
              type: "string",
              title: "QC image set",
            },
          },
        },
        mainParameters: {
          type: "object",
          title: "Main Parameters",
          uiSchema: {
            "ui:grid": [
              { imageColorControl: { cols: 24 } },
              { subImageBorderControl: { cols: 24 } },
            ],
            "ui:options": { label: true, align: false, accordion: true },
          },
          properties: {
            imageColorControl: {
              type: "object",
              title: "Image Color Control",
              uiSchema: {
                "ui:options": {
                  label: true,
                  align: false,
                  col: 9,
                },
                "ui:grid": [
                  { brightness: { cols: 12 }, saturation: { cols: 12 } },
                  { contrast: { cols: 12 }, hue: { cols: 12 } },
                ],
              },
              properties: {
                brightness: {
                  type: "number",
                  title: "Brightness",
                },
                saturation: {
                  type: "number",
                  title: "Saturation",
                },
                contrast: {
                  type: "number",
                  title: "Contrast",
                },
                hue: {
                  type: "number",
                  title: "Hue",
                },
              },
            },
            subImageBorderControl: {
              type: "object",
              title: "Sub Image Window Control",
              uiSchema: {
                "ui:options": {
                  label: true,
                  align: false,
                  col: 15,
                  grid: true,
                },
                "ui:grid": [
                  { windowXMin: { cols: 12 }, windowYMin: { cols: 12 } },
                  { windowXMax: { cols: 12 }, windowYMax: { cols: 12 } },
                ],
              },
              properties: {
                windowXMin: {
                  type: "number",
                  title: "Window x min",
                },
                windowYMin: {
                  type: "number",
                  title: "Window y min",
                },
                windowXMax: {
                  type: "number",
                  title: "Window x max",
                },
                windowYMax: {
                  type: "number",
                  title: "Window y max",
                },
              },
            },
          },
        },
        outputData: {
          uiSchema: {
            "ui:grid": [{ outputImageSet: { cols: 12 } }],
            "ui:options": { label: true, align: false, col: 24, grid: true },
          },
          type: "object",
          title: "Output data",
          properties: {
            outputImageSet: {
              type: "number",
              title: "Output image set",
            },
          },
        },
      },
    },
  },
}
const w2: TFlow = {
  id: "flow2",
  api,
  version,
  parameters: parameters2,
}

export const p2: TParametricConfig = {
  triggerSource: "submit", // qc | submit | auto button ,...
  formData: {
    paramSection: {
      inputData: {
        inputImageSet: "AAA",
        processImageSet: "Landscape",
        inputPolygonSet: "BBB",
        qcImageSet: "CCC",
      },
      mainParameters: {
        imageColorControl: {
          brightness: 111,
          saturation: 222,
          contrast: 333,
          hue: 444,
        },
        subImageBorderControl: {
          windowXMin: 555,
          windowYMin: 666,
          windowXMax: 777,
          windowYMax: 888,
        },
      },
      outputData: {
        outputImageSet: 7,
      },
    },
    qcSection: {
      trainTrackImage: "EEE",
      processingWindowLimit: "FFF",
    },
  },
}
export default w2
