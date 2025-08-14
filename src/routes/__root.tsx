import { AppSidebar } from "@/components/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
    </SidebarProvider>
  ),
});
