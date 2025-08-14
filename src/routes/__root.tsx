import { AppSidebar } from "@/components/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createRootRoute, Outlet, useRouter } from "@tanstack/react-router";

function RootLayout() {
  const router = useRouter();
  const pathname = router.state.location.pathname;

  return (
    <SidebarProvider>
      {pathname != "/login" && <AppSidebar />}
      <Outlet />
    </SidebarProvider>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
