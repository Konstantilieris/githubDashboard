import { create } from "zustand";
import { persist } from "zustand/middleware";
const useQueryStore = create(
  persist(
    (set) => ({
      queryValue: "", // Default value
      setQueryValue: (value) => set({ queryValue: value }), // Action to update state
    }),
    {
      name: "query-store", // Key to store in localStorage
    }
  )
);
export default useQueryStore;
