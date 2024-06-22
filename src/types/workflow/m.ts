import fs from "fs"
import { TManager, generateData } from "./types"

import w1, { p1 } from "./w1"
import w2, { p2 } from "./w2"
import w3, { p3 } from "./w3"
import w4 from "./w4"

const m: TManager = {
  flows: [
    { flow: w1.id, status: "executed" },
    { flow: w2.id, status: "running" },
    { flow: w3.id, status: "disabled" },
    { flow: w4.id, status: "unexecuted" },
  ],
}

const o1 = generateData(w1.parameters, true)
const o2 = generateData(w2.parameters, true)
const o3 = generateData(w3.parameters, true)
// const o4 = generateData(w4.parameters, true);

const f1 = {
  id: w1.id,
  api: w1.api,
  version: w1.version,
  ...o1,
}

const f2 = {
  id: w2.id,
  api: w2.api,
  version: w2.version,
  ...o2,
}

const f3 = {
  id: w3.id,
  api: w3.api,
  version: w3.version,
  ...o3,
}

const PATH = `/Users/dang.kien.thanh/Documents/GitHub/test_everything/rjsf-multi-col-blog/src/components/w/`
fs.writeFileSync(`${PATH}w1.json`, JSON.stringify(f1, null, "\t"))
fs.writeFileSync(`${PATH}w2.json`, JSON.stringify(f2, null, "\t"))
fs.writeFileSync(`${PATH}w3.json`, JSON.stringify(f3, null, "\t"))
// fs.writeFileSync(`${PATH}w4.json`, JSON.stringify(o4, null, '\t'))

fs.writeFileSync(`${PATH}m.json`, JSON.stringify(m, null, "\t"))
fs.writeFileSync(`${PATH}p1.json`, JSON.stringify(p1, null, "\t"))
fs.writeFileSync(`${PATH}p2.json`, JSON.stringify(p2, null, "\t"))
fs.writeFileSync(`${PATH}p3.json`, JSON.stringify(p3, null, "\t"))
// fs.writeFileSync('e.json', JSON.stringify(e, null, '\t'))
