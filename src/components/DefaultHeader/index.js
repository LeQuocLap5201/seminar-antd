import { GithubOutlined } from "@ant-design/icons";
import { Button, Col, Layout, Menu, Row, theme, Tooltip } from "antd";
import { useCurrentPath } from "hooks";
import { Link } from "react-router-dom";
import { ANTD_LOGO } from "svg";
import "./index.css";

const { Header } = Layout;
const { useToken } = theme;

function DefaultHeader() {
  const { token } = useToken();
  const current = useCurrentPath(1);

  const items = [
    {
      label: <Link to="/spec/introduce">Thiết kế</Link>,
      key: "spec",
    },
    {
      label: <Link to="/react/introduce">Phát triển</Link>,
      key: "react",
    },
  ];

  return (
    <Header
      style={{
        background: token.colorBgContainer,
      }}
      className="default-header"
    >
      <Row className="h-full">
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          xl={5}
          xxl={4}
          className="h-full default-header__logo"
        >
          <a
            href="https://ant.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ANTD_LOGO} alt="logo" />
            <span>Ant Design</span>
          </a>
        </Col>
        <Col
          xs={0}
          sm={0}
          md={18}
          lg={18}
          xl={19}
          xxl={20}
          className="h-full default-header__menu"
        >
          <Menu mode="horizontal" selectedKeys={[current]} items={items} />
          <Tooltip title="Github">
            <a
              href="https://github.com/ant-design/ant-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="text" icon={<GithubOutlined />} />
            </a>
          </Tooltip>
        </Col>
      </Row>
    </Header>
  );
}

export default DefaultHeader;
