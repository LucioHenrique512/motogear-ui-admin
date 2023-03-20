import React, { useState } from "react";
import { PieChartOutlined, DropboxOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import { ContentContainer } from "./styles";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Pedidos", "orders", <PieChartOutlined />),
  getItem("Produtos", "products", <DropboxOutlined />),
];

export const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const {pathname} = useLocation()

  const navigate = useNavigate();

  const currentPath = pathname.replace("/","")

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="vertical"
          items={items}
          selectedKeys={[currentPath]}
          onClick={(evnt) => {
            navigate(evnt.key);
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Produtos" }, { title: "Novo produto" }]}
          />
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MotoGear ©2023 Created by MotoGear Inc
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
