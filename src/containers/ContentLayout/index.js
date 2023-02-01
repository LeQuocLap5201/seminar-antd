import { Col, Menu, Row, theme } from "antd";
import { useCurrentPath } from "hooks";
import { Outlet } from "react-router-dom";
import "./index.css";

const { useToken } = theme;

export default function ContentLayout({ menu, openKeys }) {
  const { token } = useToken();
  const current = useCurrentPath(2);

  const styles = {
    background: token.colorBgContainer,
  };

  return (
    <main className="content-layout" style={styles}>
      <Row>
        <Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4} style={styles}>
          <Menu
            className="content-layout__menu"
            inlineIndent={44}
            mode="inline"
            items={menu || []}
            selectedKeys={[current]}
            defaultOpenKeys={openKeys || []}
          />
        </Col>
        <Col xs={0} sm={0} md={18} lg={18} xl={19} xxl={20} style={styles}>
          <Outlet />
          {/* <footer>Footer</footer> */}
        </Col>
      </Row>
    </main>
  );
}
