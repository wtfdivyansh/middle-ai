/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav/main";
import { sidebarData } from "./data";
import { NavUser } from "./nav/user";
import { NavDashboard } from "./nav/dash";
import { Separator } from "@/components/ui/separator";


export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
       <SidebarHeader>
       <NavUser user={sidebarData.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavDashboard dash={sidebarData.dash}/>
        <Separator/>
        <NavMain items={sidebarData.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}