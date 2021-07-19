import { IInitialStoreState } from "../../types/types";
import { initializeStore } from "../store";

export const useInitializedStore = (initialState: IInitialStoreState) => {
  return initializeStore(initialState);
};
