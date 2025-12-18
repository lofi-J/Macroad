import { useLayout } from '@/context/layout-provider';
import clsx from 'clsx';

export const Sidebar = () => {
  const { sidebarWidth, isSidebarDragging, sidebarRef } = useLayout();

  return (
    <div className="fixed top-0 bottom-0 left-0 z-50 flex flex-row" style={{ width: `${sidebarWidth}px` }}>
      <aside className="flex flex-1 flex-col">
        <h1>Macroad</h1>
      </aside>
      <div
        ref={sidebarRef}
        className={clsx(
          'px-0.5 transition-transform duration-75 hover:cursor-col-resize',
          isSidebarDragging && 'bg-border/80 w-[3px]',
        )}
      >
        <div className="bg-border h-full w-0.5" />
      </div>
    </div>
  );
};
