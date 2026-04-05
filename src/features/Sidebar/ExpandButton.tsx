import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "./SidebarProvider";

const ExpandButton = () => {
     const { expanded, toggleSwitch } = useSidebar();
    
    return (
        <button
            onClick={toggleSwitch}
            className="p-1.5 absolute top-[70%] -right-3 z-100 rounded-full text-sid-bar-primary-text bg-primary shadow-md hover:bg-primary-light flex items-center justify-center transition-transform hover:scale-110">
            {expanded ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
        </button>

    );
};

export default ExpandButton;