import { Topbar } from "@/components/topbar";
import ThemeProvider from "@/context/theme-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <ThemeProvider>
      <main className="w-screen h-screen">
        <Topbar />
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
