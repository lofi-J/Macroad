import { DEFAULT_SIDEBAR_WIDTH, MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH } from '@/context/layout-provider';
import { clampNumber } from '@/utils/math';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type UseSidebarDraggingProps = {
  sidebarRef: React.RefObject<HTMLElement | null>;
  setSidebarWidth: Dispatch<SetStateAction<number>>;
};

export const useSidebarDragging = ({ sidebarRef, setSidebarWidth }: UseSidebarDraggingProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [width, setWidth] = useState(DEFAULT_SIDEBAR_WIDTH);

  // sidebar resizing
  useEffect(() => {
    if (!sidebarRef.current) return;

    const handleMouseDown = () => {
      document.body.setAttribute('data-dragging', 'true');
      setIsDragging(true);
    };

    const handleMouseUp = () => {
      document.body.removeAttribute('data-dragging');
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      console.log('move');
      document.body.style.cursor = 'col-resize';

      setWidth(clampNumber(e.clientX, MIN_SIDEBAR_WIDTH, MAX_SIDEBAR_WIDTH));
    };

    sidebarRef.current.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      sidebarRef.current?.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [sidebarRef.current, isDragging]);

  // restore sidebar width when double click
  useEffect(() => {
    const restoreWidth = () => {
      setSidebarWidth(DEFAULT_SIDEBAR_WIDTH);
    };

    if (sidebarRef.current) {
      sidebarRef.current.addEventListener('dblclick', restoreWidth);
    }

    return () => {
      sidebarRef.current?.removeEventListener('dblclick', restoreWidth);
    };
  }, [sidebarRef.current]);

  // synchronize sidebar width with the local width state
  useEffect(() => {
    setSidebarWidth(width);
  }, [width, setSidebarWidth]);

  return { isDragging, width };
};
