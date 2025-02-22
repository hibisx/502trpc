import { OriginHeader } from "@/components/layouts/ori-header";
import Origin from "./page";
import { cn } from "@/lib/utils";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <OriginHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
