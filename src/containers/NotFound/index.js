import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function NotFound() {
  return (
    <div className="h-100vh flex-center not-found">
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn truy cập không tồn tại."
        extra={
          <Link to="/spec/introduce">
            <Button type="primary">Trang chủ</Button>
          </Link>
        }
      />
    </div>
  );
}
