// store/useBrandStore.ts
import { create } from "zustand";
import { brand } from "../../../type";
import brandData from "@/data/brands.json";

export const useBrandStore = create<{
  brands: brand[];
  setBrands: (b: brand[]) => void;
}>()((set) => ({ brands: brandData, setBrands: (b) => set({ brands: b }) }));
