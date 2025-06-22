import { create } from "zustand";
import { variant } from "../../../types/type";
import variantsData from "@/data/cardData.json";

export const useVarinatStore = create<{
  variants: variant[];
  setVariants: (v: variant[]) => void;
}>()((set) => ({
  variants: variantsData,
  setVariants: (v) => set({ variants: v }),
}));
