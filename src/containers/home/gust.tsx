import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const GustContainer: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(1).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: <Link href={"/login"}>Login</Link>,
          }))}
        />
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Project Manager ©2023 Created by Zeus
      </Footer>
    </Layout>
  );
};

export default GustContainer;
