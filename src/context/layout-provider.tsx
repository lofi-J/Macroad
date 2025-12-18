import { useSidebarDragging } from '@/hooks/use-sidebar-dragging';
import { createContext, Dispatch, SetStateAction, useContext, useRef, useState } from 'react';

export const DEFAULT_SIDEBAR_WIDTH = 280;
export const MIN_SIDEBAR_WIDTH = 150;
export const MAX_SIDEBAR_WIDTH = 450;

export const DEFAULT_TOPBAR_HEIGHT = 42;

type LayoutProviderState = {
  sidebarWidth: number;
  isSidebarDragging: boolean;
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  topbarHeight: number;
  setSidebarWidth: Dispatch<SetStateAction<number>>;
  setTopbarHeight: Dispatch<SetStateAction<number>>;
};

type LayoutProviderProps = {
  children: React.ReactNode;
};

export const layoutProviderInitialState: LayoutProviderState = {
  sidebarWidth: 0,
  isSidebarDragging: false,
  sidebarRef: { current: null },
  topbarHeight: 0,
  setSidebarWidth: () => {},
  setTopbarHeight: () => {},
};

const LayoutProviderContext = createContext<LayoutProviderState>(layoutProviderInitialState);

export default function LayoutProvider({ children }: LayoutProviderProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);

  const { isDragging: isSidebarDragging } = useSidebarDragging({ sidebarRef, setSidebarWidth });

  const [topbarHeight, setTopbarHeight] = useState(42); // px

  const value: LayoutProviderState = {
    sidebarWidth,
    sidebarRef,
    isSidebarDragging,
    topbarHeight,
    setSidebarWidth,
    setTopbarHeight,
  };

  return <LayoutProviderContext.Provider value={value}>{children}</LayoutProviderContext.Provider>;
}

export const useLayout = () => {
  const context = useContext(LayoutProviderContext);

  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }

  return context;
};
