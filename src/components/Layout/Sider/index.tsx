import React, { useMemo } from "react"
import { Layout, Menu } from "antd"
import { useCollapseStore } from "@/store/useCollapseStore"
import { ICollapse } from "@/types/common"
import { useCurrentRoute } from "@hooks/useCurrentRoute"
import { Link } from "react-router-dom"
import { trans } from "@/locale"

const { Sider } = Layout

export const SiderCustom: React.FC = () => {
  const collapsed = useCollapseStore((state: ICollapse) => state.collapsed)
  const currentRoute = useCurrentRoute()

  const listMenu = useMemo(
    () => [
      {
        key: "dashboard",
        icon: <i className="fa-solid fa-list-ul"></i>,
        label: <Link to="/dashboard">{trans("menu.dashboard")}</Link>,
      },
      {
        key: "management",
        icon: <i className="fa-solid fa-list-ul"></i>,
        label: <Link to="/management">{trans("menu.management")}</Link>,
      },
    ],
    [],
  )

  const activeKey = useMemo(() => {
    if (currentRoute?.name) {
      return [currentRoute?.name]
    }
    return undefined
  }, [currentRoute])

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="h-screen">
      <div className="m-1 rounded h-14 flex justify-center">
        <i className="fa-solid fa-truck-fast m-auto text-3xl text-white-50"></i>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        className="h-[calc(100vh-66px)]"
        selectedKeys={activeKey}
        items={listMenu}
      />
    </Sider>
  )
}
