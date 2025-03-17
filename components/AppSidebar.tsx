import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "./ui/sidebar";
import { BookCopy, ChevronDown, Layers2Icon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/collapsible";
import Logo from "./Logo";

const experiments = [
  {
    name: "Module Creation",
    icon: BookCopy,
    url: "/experiment/moduleCreation"
  }
];

const layouts = [
  {
    name: "layout1",
    icon: Layers2Icon,
    url: "/layout/layout1"
  }
];
function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel>Experiments</SidebarGroupLabel>
            <SidebarGroupAction asChild>
              <CollapsibleTrigger asChild>
                <ChevronDown className="mx-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupAction>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {experiments.map((project) => (
                    <SidebarMenuItem key={project.name}>
                      <SidebarMenuButton asChild>
                        <a href={project.url}>
                          <project.icon />
                          <span>{project.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel>Layouts</SidebarGroupLabel>
            <SidebarGroupAction asChild>
              <CollapsibleTrigger asChild>
                <ChevronDown className="mx-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupAction>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {layouts.map((project) => (
                    <SidebarMenuItem key={project.name}>
                      <SidebarMenuButton asChild>
                        <a href={project.url}>
                          <project.icon />
                          <span>{project.name}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter>
        <h1 className="font-bold font-sans text-center">Contact Us</h1>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
