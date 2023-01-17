import { Layout } from "antd";
import { DefaultHeader } from "components";
import { Outlet } from "react-router-dom";
import "./index.css";

function DefaultLayout() {
  return (
    <Layout>
      <DefaultHeader />
      <Outlet />
    </Layout>
  );
}

export default DefaultLayout;
