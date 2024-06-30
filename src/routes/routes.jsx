import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/HomePage/Home";
import ContactPage from "../pages/contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/contact",
                element: <ContactPage></ContactPage>

            },
        ]
    }
])