import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
            <div className="flex flex-col gap-2 items-center text-primary-text">
                <h1 className="text-4xl font-bold text-center">Oops! Unexpected Error</h1>
                <p className="text-center text-md font-normal ">
                   Looks like an unexpected error accord, contact us or try again later
                </p>
                <div className="pt-5">
                    <Button asChild variant="secondary" >
                      <Link to="/home">{"<- Back To Home"}</Link></Button>
                </div>
            </div>
            <img className="w-72" src={'/src/assets/scared-almond.png'} />
        </div>
    );
};

export default ErrorPage;