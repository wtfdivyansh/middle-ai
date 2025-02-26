import { AppSidebar } from "@/components/custom/site/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

interface DashLayoutProps {
  children: React.ReactNode;
}

async function DashLayout({ children }: DashLayoutProps) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("mmai_sidebar")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="w-full h-full">
      <SidebarTrigger />
      {children}
    </div>
    </SidebarProvider>
  );
}

export default DashLayout;