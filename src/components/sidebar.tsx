import { useLayout } from '@/context/layout-provider';

export const Sidebar = () => {
  const { sidebarWidth } = useLayout();
  return (
    <div className="fixed top-0 bottom-0 left-0 z-50 border" style={{ width: `${sidebarWidth}px` }}>
      <aside className="flex flex-1 flex-col">
        <h1>Macroad</h1>
      </aside>
    </div>
  );
};
