import { create } from "zustand";
import { model } from "../../../types/type";
import modelsData from "@/data/models.json";

export const useModelStore = create<{
  models: model[];
  setModels: (m: model[]) => void;
}>()((set) => ({ models: modelsData, setModels: (m) => set({ models: m }) }));
