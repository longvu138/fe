import UserApi from "@/api/ApiCommon"
import { useMutation, useQueryClient } from "react-query"
import { notification } from "antd"
import _ from "lodash"
import { localStore } from "@/utils/LocalStore"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    return useMutation(
        async (body: TLogin) => {
            const response = await UserApi.login(body)
            localStorage.setItem("loginSession", response.data.data.token)
            localStore.setJson("userInfo", response.data.data.userInfo)
        },
        {
            onSuccess: () => {
                navigate("/")
            },
            onError: (error: any) => {
                const err = _.get(error, "response.data.message")
                notification.error({
                    message: err|| "Đã có lỗi xảy ra",
                    // description: err || "Đăng nhập không thành công",
                    key: "err",
                    duration: 3,
                })
            },
            onSettled: () => {
                queryClient.invalidateQueries("user")
            },
        },
    )
}

export const useRegister = () => {
    const queryClient = useQueryClient()
    return useMutation(
        async (body: TRegister) => {
            const res = await UserApi.register(body)
            return res.data
        },
        {
            onSuccess: () => {
                
            },
            onError: (error: any) => {
                const err = _.get(error, "response.data.message")
                notification.error({
                    message: "Đã có lỗi xảy ra",
                    description: err || "Đăng ký không thành công vui lòng thử lại!",
                    key: "err",
                    duration: 3,
                })
            },
            onSettled: () => {
                queryClient.invalidateQueries("user")
            },
        },
    )
}


export const useVerifyOTP = () => {
    const queryClient = useQueryClient()
    return useMutation(
        async (body: TVerify) => {
            const res = await UserApi.verifyOTP(body)
            return res.data
        },
        // {
        //     onSuccess: () => {
                
        //     },
        //     onError: (error: any) => {
        //         console.error(error)
        //         const err = _.get(error, "response.data.message")
        //         notification.error({
        //             message: "Đã có lỗi xảy ra",
        //             description: err || "Đăng ký không thành công vui lòng thử lại!",
        //             key: "err",
        //             duration: 3,
        //         })
        //     },
        //     onSettled: () => {
        //         queryClient.invalidateQueries("user")
        //     },
        // },
    )
}
