import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import type React from "react";
import { Outlet } from "react-router-dom";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger/>
        {children}
      </SidebarProvider>
      Layout details
      <Outlet />
    </div>
  );
}
