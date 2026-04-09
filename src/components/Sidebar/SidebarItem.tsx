import { NavLink } from "react-router-dom";
import { cn } from '@/lib/utils/cn';
import { useSidebar } from "./SidebarProvider";
import Tooltip from "../Tooltip";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  active?: boolean;
}

const SidebarItem = ({ icon, text, link }: SidebarItemProps) => {
  const { expanded } = useSidebar();

  return (
    <NavLink to={link}>
      {({ isActive }) => (
        <li
          className={cn(
            "group relative flex items-center border-transparent p-4 my-2 text-lg cursor-pointer rounded-md transition-all duration-500 text-sid-bar-primary-text hover:bg-sid-bar-haver-bg justify-start",
            {
              "bg-sid-bar-active-bg ": isActive,
              "border-primary ": isActive && expanded,
              "gap-0 justify-center border-0": !expanded,
              "gap-3 justify-start border-l-4 ": expanded,
            },
          )}>
          <div className="shrink-0 flex items-center justify-center">
            {icon}
          </div>

          <span
            className={cn(
              "overflow-hidden whitespace-nowrap text-basic transition-all",
              expanded ? "w-auto opacity-100 ml-3" : "w-0 opacity-0",
            )}>
            {text}
          </span>

          {/* Show tooltip on collapsed side bar */}
          {!expanded && (<Tooltip text={text} position="right"/>)}
        </li>
      )}
    </NavLink>
  );
};





export default SidebarItem;
