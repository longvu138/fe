import { ICollapse } from "@/types/common"
import { create } from "zustand"

export const useCollapseStore = create<ICollapse>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed: boolean) => {
    set({ collapsed })
  },
}))
