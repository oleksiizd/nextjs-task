import { IRootState } from "../../types/types";
import { initializeStore } from "../store";

export const useInitializedStore = (initialState: IRootState) => {
  return initializeStore(initialState);
};
