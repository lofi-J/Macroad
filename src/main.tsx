import '@/globals.css';
import { router } from '@/router';
import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />);
