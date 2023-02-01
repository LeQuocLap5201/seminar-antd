import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Switch, theme } from "antd";
import React, { useState } from "react";
import "./index.css";

const { useToken } = theme;

const { Header, Content, Sider } = Layout;

const items1 = ["1", "2", "3", "4", "5"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

export default function LayoutExample({ showSwitch = false, isNav = false }) {
  const {
    token: { colorBgContainer },
  } = useToken();

  const [layout, setLayout] = useState("left-right");

  const onChange = (checked) => {
    setLayout(checked ? "top-bottom" : "left-right");
  };

  return (
    <div className="layout-example">
      {showSwitch ? (
        <Switch
          className="mb-16"
          checkedChildren={isNav ? "Điều hướng trên cùng" : "Bố cục Trên-Dưới"}
          unCheckedChildren={isNav ? "Điều hướng bên" : "Bố cục Trái-Phải"}
          onChange={onChange}
        />
      ) : null}
      <Layout>
        <Header className="header">
          <div className="logo" />
          {(isNav && layout === "top-bottom") || !isNav ? (
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items1}
            />
          ) : null}
        </Header>
        {layout === "top-bottom" ? (
          <Content
            style={{
              padding: "24px 50px",
            }}
          >
            <div
              style={{
                background: colorBgContainer,
                minHeight: 280,
                padding: 24,
              }}
            >
              Content
            </div>
          </Content>
        ) : (
          <Layout>
            <Sider
              width={200}
              style={{
                background: colorBgContainer,
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                  borderRight: 0,
                }}
                items={items2}
              />
            </Sider>
            <Layout
              style={{
                padding: 24,
              }}
            >
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        )}
      </Layout>
    </div>
  );
}
