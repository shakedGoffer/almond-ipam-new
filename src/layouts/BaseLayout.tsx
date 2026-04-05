import type React from "react";
import { Outlet } from "react-router-dom";

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="flex-1 h-screen flex flex-col px-16 py-12 app-bg overflow-auto">
      {children ? children : <Outlet />}
    </main>
  );
};

export default BaseLayout;
