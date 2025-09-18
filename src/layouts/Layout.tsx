import { SidebarProvider } from "@/components/ui/sidebar";
// import type React from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "@/components/app-sidebar";
import AppBreadcrumb from "@/components/app-breadcrumb";

export function Layout(/*{ children }: { children: React.ReactNode }*/) {


  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <AppBreadcrumb />
        {/* {children} */}
      </SidebarProvider>
      <Outlet />
    </div>
  );
}
