import { useQuery } from "@tanstack/react-query";
import { invoke } from "@tauri-apps/api/core";

export const Topbar = () => {
  const { data, isPending } = useQuery({
    queryKey: ["SOME_COUNT"],
    queryFn: () => invoke("get_some_count"),
  });

  return (
    <header className="max-w-xl sticky top-5 z-50 mx-auto">
      <div className="rounded-full border bg-background p-2 flex items-center justify-center">
        {isPending ? <span>Loading...</span> : JSON.stringify(data)}
      </div>
    </header>
  );
};
