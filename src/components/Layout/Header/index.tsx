import React from "react"
import { Avatar, Button, Col, Divider, Layout, Row, Space, theme, Typography, Dropdown } from "antd"
import { useCollapseStore } from "@/store/useCollapseStore"
import { ICollapse } from "@/types/common"
import type { MenuProps } from "antd"
import { trans } from "@/locale"
import { localStore } from "@/utils/LocalStore"

const { Header } = Layout
type MenuItem = Required<MenuProps>["items"][number]

type Props = {
    title: string
}

export const HeaderCustom: React.FC<Props> = ({ title }) => {
    const collapsed = useCollapseStore((state: ICollapse) => state.collapsed)
    const setCollasped = useCollapseStore((state: ICollapse) => state.setCollapsed)
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const userLogin = localStore.getJson('userInfo')?.username
    
    const onLogout = () => {
        location.href = "/"
        localStorage.removeItem("loginSession")
    }

    const items: MenuItem[] = [
        {
            label: trans("login.logout_btn"),
            key: "logout",
            icon: <i className="fa-solid fa-arrow-right-from-bracket"></i>,
            onClick: () => onLogout(),
        },
    ]
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Row
                justify="space-between"
                align="middle"
                className="pr-6">
                <Col>
                    <Space align="center">
                        <Button
                            type="text"
                            icon={<i className="fa-solid fa-bars text-xl"></i>}
                            onClick={() => setCollasped(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Typography.Title className="!m-0 !text-xl uppercase">{title}</Typography.Title>
                    </Space>
                </Col>
                <Col className="h-16">
                    <Space align="center">
                        {/* <Menu
              selectedKeys={[]}
              mode="horizontal"
              items={items}
            /> */}
                        <Divider type="vertical" />
                        <Dropdown menu={{ items }}>
                            <div>
                                <Space>
                                    <Avatar />
                                    <div className="font-medium">{userLogin}</div>
                                </Space>
                            </div>
                        </Dropdown>
                    </Space>
                </Col>
            </Row>
        </Header>
    )
}
