import { ListFilterPlus, Search } from "lucide-react";
import FormInput from "./FormInput";
import { Button } from "./ui/button";

const SearchBar = () => {
    return (
        <div className="flex flex-row flex-1 items-center gap-2">
            <FormInput placeholder="Search...." className="py-2 text-md border-0 w-[30vw] min-w-68" />
            <Button className="p-2.5 h-fit w-fit rounded-2xl bg-primary text-form-bg">
                <Search />
            </Button>
            <Button className="p-2.5 h-fit w-fit rounded-2xl">
                <ListFilterPlus />
            </Button>
        </div>
    );
}

export default SearchBar;