import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout";
import ErrorPage from "@/pages/ErrorPage";
import NotFoundPage from "@/pages/NotFoundPage";
import LandingPage from "@/pages/LandingPage";
import SidebarLayout from "@/layouts/SidebarLayout";
import HomePage from "@/pages/HomePage";
import SubnetsPage from "@/pages/SubnetsPage";
import SubnetDetailsPage from "@/pages/SubnetDetailsPage";
import AboutPage from "@/pages/AboutPage";
import LoginPage from "@/pages/LoginPage";



const router = createBrowserRouter([
    // Public routes - without auth and sidebar
    {
        element: <BaseLayout />,
        errorElement: (
            <BaseLayout>
                <ErrorPage />
            </BaseLayout>
        ),
        children: [
            {
                path: "*",
                element: <NotFoundPage />,
            },
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },

        ]
    },

    // Protected routes - with auth and sidebar
    {
        path: '/',
        element: <SidebarLayout />,
        errorElement: (
            <BaseLayout>
                <ErrorPage />
            </BaseLayout>
        ),
        children: [
            {
                path: '/home',
                element: <HomePage />
            },
            {
                path: '/subnets',
                element: <SubnetsPage />
            },
            {
                path: "/subnets/:subnetAddress",
                element: <SubnetDetailsPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
        ],
    },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;