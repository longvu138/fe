import { useVerifyOTP } from "@/hooks/useAuth"
import { localStore } from "@/utils/LocalStore"
import { Button, Input, notification, Result } from "antd"
import _ from "lodash"
import { useEffect, useRef } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Verify = () => {
    const [searchParams] = useSearchParams()
    const email = searchParams.get("email")!
    const verifyOTPMutation = useVerifyOTP()
    const inputOtp: any = useRef()
    const navigate = useNavigate()

    const onChange = (text: any) => {
        const body: TVerify = { email: email, otp: text }
        verifyOTPMutation.mutate(body, {
            onSuccess: (data) => {
                if (data) {
                    localStorage.setItem("loginSession", data.data.token)
                    localStore.setJson("userInfo", data.data.userInfo)
                    notification.success({
                        message: "Thành Công",
                        description: "Xác thực tài khoản thành công",
                        key: "success",
                        duration: 2,
                    })
                    setTimeout(() => {
                        navigate("/")
                    }, 500)
                }
            },
            onError: (error: any) => {
                const err = _.get(error, "response.data.message")
                if (err === "Account already verified") {
                    notification.error({
                        message: "",
                        description: "Tài khoản đã được xác thực, vui lòng đăng nhập!",
                        key: "err",
                        duration: 3,
                    })
                    navigate("/login")
                } else {
                    notification.error({
                        message: "",
                        description: "Mã OTP không chính vui lòng thử lại!",
                        key: "err",
                        duration: 3,
                    })
                }
            },
            onSettled: () => {
                // setLoading(false)
            },
        })
    }
    const sharedProps = {
        onChange,
    }
    useEffect(() => {
        inputOtp?.current?.focus()
    }, [])

    return (
        <div className="flex items-center justify-center h-screen">
            <Result
                status="success"
                title="Xác Thực Tài Khoản"
                subTitle="Chúng tôi đã gửi mail"
                extra={
                    // <div className="flex flex-col gap-8 items-center">
                    <Input.OTP
                        size="large"
                        className="block"
                        ref={inputOtp}
                        variant="outlined"
                        length={6}
                        inputMode="numeric"
                        {...sharedProps}
                    />
                    // <div>
                    //     <Button type="primary">Xác thực</Button>
                    // </div>
                    // </div>
                }
            />
        </div>
    )
}

export default Verify
