import { create } from "zustand";

type TFilterStore = {
  selectedFilteredOptions: Record<string, string[]>; 
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const useFiltersStore = create<TFilterStore>((set) => ({
  selectedFilteredOptions: {},
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useFiltersStore;