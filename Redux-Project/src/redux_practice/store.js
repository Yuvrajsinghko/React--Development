import { configureStore } from "@reduxjs/toolkit";

import counterBoom from "./featur/boomSlice";
export const bangStore = configureStore({
  reducer: {
    con: counterBoom,
  },
});
