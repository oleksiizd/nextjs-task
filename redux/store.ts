import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { IRootState, IUserDataState } from "../types/types";
import userDataSlice from "./slices/reducer";
let store: ReturnType<typeof configureStorePreloaded> | null;

const configureStorePreloaded = (preloadedState?: IRootState) => {
  const result = configureStore({
    devTools: true,
    reducer: {
      userData: userDataSlice,
    },
    preloadedState,
  });
  return result;
};

export const initializeStore = (preloadedState?: IRootState) => {
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
