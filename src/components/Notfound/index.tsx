import { Button, Result } from "antd"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { trans } from "@/locale"

export const Notfound = () => {
  useEffect(() => {
    document.title = trans("title.default")
  }, [])
  return (
    <Result
      status="404"
      title="404"
      subTitle={trans("error.error404")}
      extra={
        <Link to="/">
          <Button type="primary">{trans("button.goHome")}</Button>
        </Link>
      }
    />
  )
}
