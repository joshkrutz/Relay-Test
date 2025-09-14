import { SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { Sidebar } from "lucide-react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      Layout details
      <Outlet />
      <Sidebar>
        <SidebarHeader></SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter></SidebarFooter>
      </Sidebar>
    </div>
  );
}
