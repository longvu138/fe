import { trans } from "@/locale"
import { notification } from "antd"
import { get } from "lodash"
import { localStore } from "../LocalStore"

const handleResponseSuccess = (response: any) => response

const handleResponseError = (error: any) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (get(error, "response.status") === 401) {
    notification.error({
      message: trans("message.sessionExpired"),
      key: "token_expired",
    })
    setTimeout(() => {
      localStore.setItem("loginSession", null)
      window.location.href = "/login"
    }, 1000)
  } else if (get(error, "response.status") >= 500) {
    notification.error({
      message: trans("message.serverEncountered"),
      key: "server_error",
    })
  }

  return Promise.reject(error)
}

export { handleResponseError, handleResponseSuccess }
