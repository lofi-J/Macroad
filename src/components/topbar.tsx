import { useLayout } from '@/context/layout-provider';
import { useQuery } from '@tanstack/react-query';
import { invoke } from '@tauri-apps/api/core';

export const Topbar = () => {
  const { sidebarWidth, topbarHeight } = useLayout();
  const { data, isPending } = useQuery({
    queryKey: ['SOME_COUNT'],
    queryFn: () => invoke('get_some_count'),
  });

  return (
    <header
      className="fixed top-0 z-50 border border-l-0"
      style={{ left: `${sidebarWidth}px`, right: 0, height: `${topbarHeight}px` }}
    >
      <div className="bg-background flex items-center justify-center">
        {isPending ? <span>Loading...</span> : JSON.stringify(data)}
      </div>
    </header>
  );
};
