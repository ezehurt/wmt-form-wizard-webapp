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

// Define parameters and layout for this flow.
const parameters1: unknown = {
  title: "Image Processing",
  // description: "Workflow demo form",
  type: "object",
  uiSchema: {
    "ui:grid": [
      { qcSection: { cols: 24, height: "30%" } },
      { paramSection: { cols: 24 } },
    ],
    "ui:options": {
      label: false,
      align: true,
      col: 24,
      grid: true,
      // style: { display: 'flex'}
    },
    classNames: "w1-root-class", // Apply CSS class
  },
  properties: {
    qcSection: {
      type: "object",
      uiSchema: {
        "ui:grid": [
          {
            trainTrackImage: { cols: 8 },
            processingWindowLimit: { cols: 8 },
            trainTrackImageCropped: { cols: 8 },
          },
        ],
        "ui:options": {
          label: true,
          align: false,
          // col: 24,
          grid: true,
          height: "30%", // 30% | 30vh
          // style: { backgroundColor: 'lightcyan', height: "30%" },
          style: { backgroundColor: "lightyellow", height: "60vh" }, // Apply inline styles
        },
        classNames: "w1-qc-section-class", // Apply CSS class
      },
      properties: {
        trainTrackImage: {
          type: "string",
        },
        processingWindowLimit: {
          type: "string",
        },
        trainTrackImageCropped: {
          type: "string",
        },
      },
    },
    paramSection: {
      type: "object",
      uiSchema: {
        "ui:grid": [
          { left: { cols: 9 }, right: { cols: 15 } },
          {
            imageColorControl: { cols: 9 },
            subImageBorderControl: { cols: 15 },
          },
          { outputImageSet: { cols: 9 } },
        ],
        "ui:options": { label: true, align: false },
      },
      properties: {
        left: {
          type: "object",
          properties: {
            inputImageSet: {
              type: "string",
              title: "Input image set",
            },
            inputPolygonSet: {
              type: "string",
              title: "Input polygon set",
            },
          },
          uiSchema: {
            "ui:options": {
              label: false,
              col: 9,
            },
          },
        },
        right: {
          type: "object",
          properties: {
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
          uiSchema: {
            "ui:options": {
              label: false,
              grid: false,
              col: 15,
            },
          },
        },
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
              { brightness: { cols: 24 } },
              { contrast: { cols: 24 } },
            ],
          },
          properties: {
            brightness: {
              type: "number",
              title: "Brightness",
            },
            // Display auto button
            // autoBrightness: {
            //   type: "number",
            //   uiSchema: {
            //     "ui:widget": "number",
            //     "ui:field": "AutoButtonWidget"
            //   }
            // },
            contrast: {
              type: "number",
              title: "Contrast",
            },
          },
        },
        subImageBorderControl: {
          type: "object",
          title: "Sub-Image Border Control",
          uiSchema: {
            "ui:options": { label: true, align: false, col: 15, grid: true },
            "ui:grid": [
              {
                borderXMin: { cols: 8 },
                borderYMin: { cols: 8 },
                borderColor: { cols: 8 },
              },
              {
                borderXMax: { cols: 8 },
                borderYMax: { cols: 8 },
                borderThickness: { cols: 8 },
              },
            ],
          },
          properties: {
            borderXMin: {
              type: "number",
              title: "Border x min",
            },
            borderYMin: {
              type: "number",
              title: "Border y min",
            },
            borderColor: {
              type: "number",
              title: "Border color",
            },
            borderXMax: {
              type: "number",
              title: "Border x max",
            },
            borderYMax: {
              type: "number",
              title: "Border y max",
            },
            borderThickness: {
              type: "number",
              title: "Border thickness",
            },
          },
        },
        outputImageSet: {
          uiSchema: {
            "ui:grid": [{ outputImageSet: { cols: 24 } }],
            "ui:options": { label: false, align: false, col: 24, grid: true },
          },
          type: "object",
          properties: {
            outputImageSet: {
              type: "string",
              title: "Output image set",
            },
          },
        },
      },
    },
  },
}
const w1: TFlow = {
  id: "flow1",
  api,
  version,
  parameters: parameters1,
}

// Real parametric flow for flow1.
export const p1: TParametricConfig = {
  triggerSource: "submit", // qc | submit | auto button ,...
  formData: {
    qcSection: {
      trainTrackImage: "train.jpg",
      processingWindowLimit: "aaa",
      trainTrackImageCropped: "bbb",
    },
    paramSection: {
      left: {
        inputImageSet: "ccc",
        inputPolygonSet: "ddd",
      },
      right: {
        processImageSet: "Human",
        qcImageSet: "eee",
      },
      imageColorControl: {
        brightness: 80,
        contrast: 90,
      },
      subImageBorderControl: {
        borderXMin: 100,
        borderYMin: 101,
        borderColor: 102,
        borderXMax: 103,
        borderYMax: 104,
        borderThickness: 105,
      },
      outputImageSet: {
        outputImageSet: "new_train",
      },
    },
  },
}
export default w1
