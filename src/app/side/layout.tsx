import { AppHeader } from "@/components/layouts/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/app-sidebar";
import { cn } from "@/lib/utils";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const headerOpen = false;

  return (
    <div
      className={cn(
        headerOpen ? "[--header-height:106px]" : "[--header-height:56px]",
        "min-h-screen"
      )}
    >
      <SidebarProvider className="flex flex-col">
        <AppHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset className="pt-[--header-height] transition-all ">
            <div className="px-6 lg:px-10 py-3 transition-[padding]">
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
