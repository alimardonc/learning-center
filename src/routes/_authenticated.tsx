import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ location }) => {
    const token = Cookies.get("token");

    if (!token) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.pathname + location.search,
        },
      });
    }
  },
  component: () => <Outlet />,
});
