import { useQuery } from '@tanstack/react-query';
import { invoke } from '@tauri-apps/api/core';

export const Topbar = () => {
  const { data, isPending } = useQuery({
    queryKey: ['SOME_COUNT'],
    queryFn: () => invoke('get_some_count'),
  });

  return (
    <header className="sticky top-5 z-50 mx-auto max-w-xl">
      <div className="bg-background flex items-center justify-center rounded-full border p-2">
        {isPending ? <span>Loading...</span> : JSON.stringify(data)}
      </div>
    </header>
  );
};
