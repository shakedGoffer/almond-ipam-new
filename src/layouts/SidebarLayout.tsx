import { BookOpenText, Home, Network } from "lucide-react";
import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div className="flex">
      <Sidebar.provider>
        <Sidebar>
          <Sidebar.item icon={<Home size={20} />} text="Home" link="/home" />
          <Sidebar.item
            icon={<Network size={20} />}
            text="Subnets"
            link="/subnets"
          />
          <Sidebar.item
            icon={<BookOpenText size={20} />}
            text="About"
            link="/about"
          />
        </Sidebar>
      </Sidebar.provider>
      <main className="flex-1 h-screen flex flex-col px-16 py-12 app-bg overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
