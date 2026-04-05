import Logo from "../../components/Logo";
import { cn } from '@/lib/utils/cn';
import ThemeSwitch from "./ThemeSwitch";
import LogoutButton from "./LogoutButton";
import {useSidebar } from "./SidebarProvider";
import type React from "react";
import ExpandButton from "./ExpandButton";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const { expanded } = useSidebar();
    return (
        <aside className={cn(
            "relative flex flex-col bg-sid-bar-bg shadow-md transition-all duration-500 ease-in-out",
            expanded ? "min-w-52" : "min-w-16" )}>
            <ExpandButton />
            <div className="my-6 flex justify-center items-center w-full">
                <Logo expanded={expanded} />
            </div>

            <nav className="flex-1 mt-5 px-1">
                <ul>{children}</ul>
            </nav>

            <div className={cn("py-4 gap-2 flex flex-col text-md", expanded ? "items-start px-3" : "items-center")}>
                <LogoutButton />
                <ThemeSwitch />
            </div>
        </aside>
    );
}

Sidebar.item = SidebarItem

export default Sidebar;