import { routeTree } from '@/routeTree.gen';
import { createRouter } from '@tanstack/react-router';

// 라우터 인스턴스 생성
export const router = createRouter({ routeTree });

// 타입 안전성을 위한 모듈 확장
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
