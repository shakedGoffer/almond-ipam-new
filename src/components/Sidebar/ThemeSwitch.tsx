import { Switch } from "radix-ui";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useSidebar } from "./SidebarProvider";
import { cn } from "@/lib/utils/cn";

const ThemeSwitch = () => {
    const { expanded } = useSidebar();
    const { theme, setTheme } = useTheme();

    return (
        <div className="px-1 flex items-center justify-center">
            <span className={cn(" text-sid-bar-secondary-text overflow-hidden whitespace-nowrap",
                expanded ? "w-auto opacity-100 mr-3" : "w-0 opacity-0 mr-0")}>
                {theme === "dark" ? "Dark" : "Light"} Mode
            </span>

            <Switch.Root
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                className={cn("text-primary h-7 rounded-full bg-slate-200 duration-500  data-[state=checked]:bg-primary",
                    expanded ? "w-14" : " w-10")}>
                <Switch.Thumb className={cn("flex h-6 w-6 items-center justify-center rounded-full bg-container-bg-basic translate-x-[0.2rem] duration-500 will-change-transform",
                    expanded ? "data-[state=checked]:translate-x-[1.8rem]" : "data-[state=checked]:translate-x-[0.8rem]")}>
                    {theme === "dark" ?
                        (<Moon className="size-4 fill-primary" />) :
                        (<Sun className="size-4 fill-primary" />)
                    }
                </Switch.Thumb>
            </Switch.Root>
        </div>
    );
};


export default ThemeSwitch;
