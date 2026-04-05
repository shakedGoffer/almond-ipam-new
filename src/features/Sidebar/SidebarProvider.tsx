import React, { createContext, useContext, useState } from 'react';


interface SidebarContextInterface {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
    toggleSwitch: () => void;
}

const SidebarContext = createContext<SidebarContextInterface | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
    const [expanded, setExpanded] = useState(true);

    const toggleSwitch = () => setExpanded((value) => !value); // function to toggle the sidbar expanded state

    return (
        <SidebarContext.Provider value={{ expanded, setExpanded, toggleSwitch }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
