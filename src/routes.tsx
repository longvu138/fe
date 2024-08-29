import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { routes } from "@config/route"
import { Notfound } from "@/components"
import { Login } from "@/containers"
import { authenticatedLoader } from "./config/Authentication"
import { Register } from "./containers/Register/Register"
import Verify from "./containers/Verify/Verify"

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            loader: authenticatedLoader(),
            children: routes.map((item) => ({
                path: item?.path,
                element: item?.component,
            })),
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
          path: "/verify",
          element: <Verify />,
      },
        {
            path: "/logout",
            element: (
                <Navigate
                    replace
                    to="/login"
                />
            ),
        },
        {
            path: "*",
            element: <Notfound />,
        },
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
