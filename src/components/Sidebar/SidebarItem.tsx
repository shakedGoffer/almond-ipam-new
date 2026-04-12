import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils/cn";
import { useSidebar } from "./SidebarProvider";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
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
          )}
        >
          <div className="shrink-0 flex items-center justify-center">
            {icon}
          </div>

          <span
            className={cn(
              "overflow-hidden whitespace-nowrap text-basic transition-all",
              expanded ? "w-auto opacity-100 ml-3" : "w-0 opacity-0",
            )}
          >
            {text}
          </span>

          {/* Show tooltip on collapsed side bar */}
          {!expanded && <Tooltip text={text} />}
        </li>
      )}
    </NavLink>
  );
};

const Tooltip = ({ text }: { text: string }) => {
  return (
    <div
      className={cn(
        "absolute rounded-md px-2 py-1 bg-gray-700 text-white text-sm invisible transition-all group-hover:visible group-hover:translate-x-0 group-hover:translate-y-0 z-50 whitespace-nowrap shadow-md pointer-events-none",
        "left-full ml-3 -translate-x-3",
      )}
    >
      <div
        className={cn(
          "absolute rotate-45 h-4 w-4 rounded-sm bg-gray-700 -z-10",
          "left-[-2px] top-1/2 -translate-y-1/2",
        )}
      />
      {text}
    </div>
  );
};

export default SidebarItem;
