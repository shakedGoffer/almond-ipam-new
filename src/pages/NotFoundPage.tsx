import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col gap-2 items-center text-primary-text">
                <h1 className="text-4xl font-bold text-center">Oops! Page Not Found</h1>
                <p className="text-center text-md font-normal ">
                    Error 404: the  page you're looking for does not exists
                </p>
                <div className="pt-5">
                    <Button asChild variant="secondary" >
                      <NavLink to="/home">{"<- Back To Home"}</NavLink></Button>
                </div>
            </div>
            <img className="w-72" src={'/src/assets/scared-almond.png'} />
        </div>
    );
};

export default NotFoundPage;