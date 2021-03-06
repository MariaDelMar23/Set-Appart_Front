import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

type Modal = "" | "error" | "advise" | "confirmation";

export interface UIState {
  type: Modal;
  header: string;
  body: string;
  action?: any;
}

const initialUI: UIState = {
  type: "",
  header: "",
  body: "",
};

interface UIModalInfo {
  header: string;
  body: string;
  action?: any;
}

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUI,
  reducers: {
    showError: (ui, action: PayloadAction<UIModalInfo>) => ({
      ...action.payload,
      type: "error",
    }),
    showAdvise: (ui, action: PayloadAction<UIModalInfo>) => ({
      ...action.payload,
      type: "advise",
    }),
    showConfirmation: (ui, action: PayloadAction<UIModalInfo>) => ({
      ...action.payload,
      type: "confirmation",
    }),
    closeUI: (ui) => ({ ...initialUI }),
  },
});

export const {
  showError: showErrorActionCreator,
  showAdvise: showAdviseActionCreator,
  showConfirmation: showConfirmationActionCreator,
  closeUI: closeUIActionCreator,
} = uiSlice.actions;

export const selectUI = (state: RootState) => state.ui;

export default uiSlice.reducer;
