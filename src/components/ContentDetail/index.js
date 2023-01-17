import { Anchor, Col, Row } from "antd";
import React from "react";
import "./index.css";

export default function ContentDetail({ children, anchorList }) {
  return (
    <div className="h-full content-detail">
      <Row className="h-full">
        {anchorList ? (
          <>
            <Col span={20} className="content-detail__main">
              {children}
            </Col>
            <Col span={4}>
              <Anchor items={anchorList} targetOffset={64} />
            </Col>
          </>
        ) : (
          <Col span={24} className="content-detail__main">
            {children}
          </Col>
        )}
      </Row>
    </div>
  );
}
