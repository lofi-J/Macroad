import { MainContainer } from '@/components/main-container';
import { Sidebar } from '@/components/sidebar';
import { Topbar } from '@/components/topbar';
import LayoutProvider from '@/context/layout-provider';
import ThemeProvider from '@/context/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
});

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LayoutProvider>
          <Topbar />
          <Sidebar />
          <MainContainer>
            <Outlet />
          </MainContainer>
        </LayoutProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
