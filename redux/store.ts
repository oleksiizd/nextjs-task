import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { IInitialStoreState } from "../types/types";
import userDataSlice from "./slices/reducer";
let store: EnhancedStore<IInitialStoreState> | null;

const configureStorePreloaded = (preloadedState?: any) => {
  const result = configureStore({
    devTools: true,
    reducer: userDataSlice,
    preloadedState,
  });
  return result;
};

export const initializeStore = (preloadedState?: any) => {
  let reinitializedStore = store ?? configureStorePreloaded(preloadedState);
  if (preloadedState && store) {
    reinitializedStore = configureStorePreloaded({
      ...store.getState(),
      ...preloadedState,
    });
    store = null;
  }

  if (typeof window === "undefined") {
    return reinitializedStore;
  }
  if (!store) {
    store = reinitializedStore;
  }

  return reinitializedStore;
};
