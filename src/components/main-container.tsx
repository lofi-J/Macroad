import { CSSProperties, PropsWithChildren } from 'react';
import { useLayout } from '../context/layout-provider';

export const MainContainer = ({ children }: PropsWithChildren) => {
  const { sidebarWidth, topbarHeight } = useLayout();
  const style: CSSProperties = {
    marginTop: `${topbarHeight}px`,
    marginLeft: `${sidebarWidth}px`,
    width: `calc(100vw - ${sidebarWidth}px)`,
  };
  return <main style={style}>{children}</main>;
};
