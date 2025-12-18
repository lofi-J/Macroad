import { useLayout } from '@/context/layout-provider';
import clsx from 'clsx';

export const Sidebar = () => {
  const { sidebarWidth, isSidebarDragging, sidebarRef } = useLayout();

  return (
    <div className="fixed top-0 bottom-0 left-0 z-50 flex flex-row border" style={{ width: `${sidebarWidth}px` }}>
      <aside className="flex flex-1 flex-col">
        <h1>Macroad</h1>
      </aside>
      <div ref={sidebarRef} className={clsx('cursor-col-resize p-px', isSidebarDragging && 'bg-red-500')}>
        <div className="bg-border h-full w-px" />
      </div>
    </div>
  );
};
