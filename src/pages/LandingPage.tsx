import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <div className="flex-1 flex flex-row items-center justify-center gap-10 ">
            <div className="flex flex-col gap-10 max-w-lg items-center text-primary-text">
                <h1 className="text-5xl font-bold text-center">Premium IP Management Solution</h1>
                <p className="text-center text-lg font-normal ">
                    Monitor & Manage IP address space, get real time visibility and control
                    with ALMOND IPAM easy-to-use, intuitive, centralized console
                </p>
                <div className="flex flex-row gap-4 w-full px-10">
                    <Button asChild  className="flex-1"><Link to="/home">{"<- Get Started"}</Link></Button>
                    <Button asChild variant="secondary"><Link to="/about">Learn More</Link></Button>
                </div>
            </div>
            <img className="w-72" src={'/src/assets/happy-almond.png'} />
        </div>
    );
};

export default LandingPage;