import { Col, Divider, Row, Typography } from "antd";
import { REFERENCE_LINK } from "common/links";
import { Code, ContentDetail, PreviewImage } from "components";
import {
  BASE_FONT_SIZE,
  FONT_SCALE_LINE_HEIGHT,
  FONT_SCALE_LINE_HEIGHT_EXAMPLE,
  FONT_WEIGHT_400,
  FONT_WEIGHT_500,
  FONT_WEIGHT_600,
  NEUTRAL_COLOR,
} from "img";
import React from "react";

const { Title, Paragraph } = Typography;

const code = {
  font: `@font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji';`,
};

export default function Font() {
  const anchorList = [
    {
      key: "font-family",
      href: "#font-family",
      title: "Họ phông chữ",
    },
    {
      key: "base-font-size",
      href: "#base-font-size",
      title: "Cỡ chữ",
    },
    {
      key: "font-scale--line-height",
      href: "#font-scale--line-height",
      title: "Tỷ lệ phông chữ và chiều cao dòng",
    },
    {
      key: "font-weight",
      href: "#font-weight",
      title: "Độ đậm của chữ",
    },
    {
      key: "font-color",
      href: "#font-color",
      title: "Màu chữ",
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Phông chữ</Title>
      <Paragraph>
        Về hệ thống phông chữ, Ant Design đề xuất 5 khía cạnh sau:
      </Paragraph>
      <Paragraph>
        <ol>
          {anchorList.map((item) => (
            <li key={item.key}>{item.title}</li>
          ))}
        </ol>
      </Paragraph>
      <Divider />
      <div id="font-family" className="mb-20">
        <Title level={2}>Họ phông chữ</Title>
        <Paragraph>
          Chọn phông chữ phù hợp đồng thời đảm bảo phông chữ luôn thân thiện, ổn
          định và chuyên nghiệp với người dùng cuối.
        </Paragraph>
        <Code code={code.font} language="css" />
      </div>
      <div id="base-font-size" className="mb-20">
        <Title level={2}>Cỡ chữ</Title>
        <Paragraph>
          Khoảng từ 12px đến 14px để đảm bảo hiệu quả đọc của người dùng tốt
          nhất trên hầu hết các màn hình thông thường dựa trên khoảng cách đọc
          từ màn hình hiển thị (50 cm) và góc đọc tối ưu (0,3).
        </Paragraph>
        <img
          className="with-margin margin-auto"
          style={{ width: 600 }}
          src={BASE_FONT_SIZE}
          alt=""
        />
      </div>
      <div id="font-scale--line-height" className="mb-20">
        <Title level={2}>Tỷ lệ phông chữ và chiều cao dòng</Title>
        <Paragraph>
          Tỷ lệ phông chữ đề cập đến một loạt phông chữ với các cỡ chữ khác
          nhau. Chiều cao dòng có thể được hiểu là một hộp vô hình được bao bọc
          bên ngoài phông chữ.
        </Paragraph>
        <img
          className="with-margin margin-auto"
          style={{ width: 600 }}
          src={FONT_SCALE_LINE_HEIGHT}
          alt=""
        />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            Ant Design, lấy cảm hứng từ thang{" "}
            <a
              href={REFERENCE_LINK.pentatonic}
              target="_blank"
              rel="noopener noreferrer"
            >
              ngũ cung
            </a>{" "}
            và nhịp điệu tự nhiên, xác định 10 phông chữ có cỡ chữ khác nhau và
            chiều cao dòng tương ứng của chúng.
          </Col>
          <Col span={12}>
            <PreviewImage src={FONT_SCALE_LINE_HEIGHT_EXAMPLE} />
          </Col>
        </Row>
      </div>
      <div id="font-weight" className="mb-20">
        <Title level={2}>Độ đậm của chữ</Title>
        <Paragraph>
          Hầu hết các trường hợp, chỉ cần regular(400) và medium(500) là đủ.
          Trong trường hợp các từ tiếng Anh in đậm, có thể sử dụng
          semibold(600).
        </Paragraph>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <img src={FONT_WEIGHT_400} alt="" />
          </Col>
          <Col span={8}>
            <img src={FONT_WEIGHT_500} alt="" />
          </Col>
          <Col span={8}>
            <img src={FONT_WEIGHT_600} alt="" />
          </Col>
        </Row>
      </div>
      <div id="font-color" className="mb-20">
        <Title level={2}>Màu chữ</Title>
        <Paragraph>
          Nên tuân theo tiêu chuẩn{" "}
          <a
            href={REFERENCE_LINK.wcag}
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG
          </a>
        </Paragraph>
        <img
          className="with-margin"
          style={{ width: 800 }}
          src={NEUTRAL_COLOR}
          alt=""
        />
      </div>
    </ContentDetail>
  );
}
