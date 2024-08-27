import { IAuthentication } from "@/types/common"
import { ApiClientNoToken, defaultApiClient } from "@/utils/ApiClient"

export default class UserApi {
    static getCurrentUser() {
        return defaultApiClient.get<IAuthentication>("/users/current")
    }

    static updateUserTimeZone(body: { zoneInfo: string }): Promise<any> {
        return defaultApiClient.patch(`users`, body)
    }

    static login(body: TLogin) {
        return ApiClientNoToken.post("/login", body)
    }

    static register(body: TRegister) {
      return ApiClientNoToken.post("/register", body)
  }
}
