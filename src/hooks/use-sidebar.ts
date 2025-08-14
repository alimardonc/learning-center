import type { SidebarContextProps } from "@/components/ui/sidebar";
import { useContext, type Context } from "react";

export default function useSidebar(
  SidebarContext: Context<SidebarContextProps | null>,
) {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}
