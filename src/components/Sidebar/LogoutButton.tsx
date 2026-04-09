import { LogOut } from "lucide-react";
import { cn } from '@/lib/utils/cn';
import { useSidebar } from "./SidebarProvider";
import { Link } from "react-router-dom";

const LogoutButton = () => {
    const { expanded } = useSidebar();
    return (
        <Link to="/" className="p-1 flex rounded-md items-center justify-center text-sid-bar-secondary-text hover:bg-sid-bar-haver-bg">
            
            <span className={cn("overflow-hidden  whitespace-nowrap ",
                    expanded ? "w-auto opacity-100 mr-3" : "w-0 opacity-0 ml-0")}>
                Logout
            </span>

            <LogOut size={18} />

        </Link>
    );
};
export default LogoutButton;