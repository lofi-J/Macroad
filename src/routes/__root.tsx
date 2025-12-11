import { Topbar } from "@/components/topbar";
import ThemeProvider from "@/context/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <main className="w-screen h-screen">
          <Topbar />
          <Outlet />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
