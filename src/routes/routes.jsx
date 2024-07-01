import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/HomePage/Home";
import ContactPage from "../pages/contact/ContactPage";
import TeamPage from "../pages/team/TeamPage";
import ServicePage from "../pages/service/ServicePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import WorkPage from "../pages/work/WorkPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>

            },
            {
                path: "/team",
                element: <TeamPage></TeamPage>

            },
            {
                path: "/service",
                element: <ServicePage></ServicePage>

            },
            {
                path: "/work",
                element: <WorkPage></WorkPage>

            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])