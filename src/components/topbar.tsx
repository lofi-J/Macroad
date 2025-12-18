import { useLayout } from '@/context/layout-provider';
import { Button } from './ui/button';

export const Topbar = () => {
  const { sidebarWidth, topbarHeight } = useLayout();

  return (
    <header
      className="fixed top-0 z-50 border border-l-0"
      style={{ left: `${sidebarWidth}px`, right: 0, height: `${topbarHeight}px` }}
    >
      <Button variant="outline" size="sm">
        Play
      </Button>
    </header>
  );
};
