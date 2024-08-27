import { LoaderFunction, LoaderFunctionArgs, redirect } from "react-router-dom"
import { SecurityService } from "../utils/SecurityService"

export const authenticatedLoader = <T extends LoaderFunction<any>>(load?: T): LoaderFunction<T> => {
  return async (args: LoaderFunctionArgs) => {
    if (SecurityService.isLogged()) {
      if (load) {
        return await load(args)
      }
      return null
    } else {
      throw redirect("/login")
    }
  }
}
