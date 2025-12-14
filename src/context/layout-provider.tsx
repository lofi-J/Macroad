import { createContext, useContext, useMemo, useRef, useState } from 'react';

type LayoutProviderState = {
  sidebarWidth: number;
  sidebarRef: React.RefObject<HTMLDivElement | null>;
  topbarHeight: number;
};

type LayoutProviderProps = {
  children: React.ReactNode;
};

export const layoutProviderInitialState: LayoutProviderState = {
  sidebarWidth: 0,
  sidebarRef: { current: null },
  topbarHeight: 0,
};

const LayoutProviderContext = createContext<LayoutProviderState>(layoutProviderInitialState);

export default function LayoutProvider({ children }: LayoutProviderProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarWidth, setSidebarWidth] = useState(280); // px

  const [topbarHeight, setTopbarHeight] = useState(42); // px

  const value = useMemo(() => {
    return { sidebarWidth, sidebarRef, topbarHeight };
  }, [sidebarWidth, sidebarRef, topbarHeight]);

  return <LayoutProviderContext.Provider value={value}>{children}</LayoutProviderContext.Provider>;
}

export const useLayout = () => {
  const context = useContext(LayoutProviderContext);

  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }

  return context;
};
