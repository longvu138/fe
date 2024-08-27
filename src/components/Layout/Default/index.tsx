import { Layout, Spin, theme } from "antd"
import { SiderCustom } from "../Sider"
import { HeaderCustom } from "../Header"
import { useEffect } from "react"
import { trans } from "@/locale"

const { Content } = Layout

export const DefaultLayout = (props: any) => {
  const { children, loading, title } = props

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  useEffect(() => {
    document.title = title ? `${title} | ${trans("title.default")}` : trans("title.default")
  }, [title])

  return (
    <Layout className="h-screen">
      <SiderCustom />
      <Layout>
        <HeaderCustom title={title} />
        <Content
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="h-full overflow-auto mx-6 my-4 p-6">
          <Spin spinning={loading}>{children}</Spin>
        </Content>
      </Layout>
    </Layout>
  )
}
