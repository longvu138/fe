import { ReactElement } from "react"
import { Dashboard } from "@/containers"
import { Navigate } from "react-router-dom"

export interface IRouteConfig {
  name: string
  path: string
  component: ReactElement
}

export const routes: Array<IRouteConfig> = [
  {
    name: "dashboard",
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    name: "home",
    path: "/",
    component: (
      <Navigate
        replace
        to="/dashboard"
      />
    ),
  },
]
