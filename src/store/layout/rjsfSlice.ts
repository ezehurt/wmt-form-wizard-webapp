import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../store/createAppSlice"

export interface rjsfSliceState {
  rootOrientation: "vertical" | "horizontal"
  rootChildren: string[]
}

const initialState: rjsfSliceState = {
  rootOrientation: "horizontal",
  rootChildren: ["root"],
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const rjsfSlice = createAppSlice({
  name: "rjsf",
  initialState,
  reducers: create => ({
    setRootChildren: create.reducer(
      (state, action: PayloadAction<string[]>) => {
        state.rootChildren = action.payload
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectRootChildren2: rjsf => rjsf.rootChildren,
  },
})

// Action creators are generated for each case reducer function.
export const { setRootChildren } = rjsfSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectRootChildren2 } = rjsfSlice.selectors

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState())

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount))
//     }
//   }
