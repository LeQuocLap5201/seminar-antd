import { Col, Row, Typography } from "antd";
import { ColorList, ColorTool, ContentDetail, PreviewImage } from "components";
import { DARK_MODE_COMFORT, DARK_MODE_DARK, DARK_MODE_LIGHT } from "img";
import React from "react";

const { Title, Paragraph } = Typography;

export default function DarkMode() {
  const anchorList = [
    {
      key: "when-to-use",
      href: "#when-to-use",
      title: "Khi nào nên sử dụng",
    },
    {
      key: "design-principles",
      href: "#design-principles",
      title: "Nguyên tắc thiết kế",
    },
    {
      key: "color",
      href: "#color",
      title: "Màu sắc",
      children: [
        {
          key: "color-palette",
          href: "#color-palette",
          title: "Bảng màu",
        },
        {
          key: "color-palette-generator",
          href: "#color-palette-generator",
          title: "Công cụ tạo bảng màu",
        },
      ],
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Chế độ tối</Title>
      <Paragraph className="mb-20">
        Là chế độ thay thế tất cả giao diện người dùng bằng màu đen hoặc màu
        tối.
      </Paragraph>
      <div id="when-to-use" className="mb-20">
        <Title level={2}>Khi nào nên sử dụng</Title>
        <Row gutter={[16, 20]} className="mb-20">
          <Col span={24}>
            <Paragraph>
              Khuyến khích khi ở trong môi trường tối vì nó ngăn ngừa mỏi mắt.
            </Paragraph>
          </Col>
          <Col span={8}>
            <Paragraph>
              Làm nổi bật những nội dung quan trọng.
              <blockquote>
                Nó hoạt động giống như tắt đèn khi xem phim trong rạp chiếu
                phim.
              </blockquote>
            </Paragraph>
          </Col>
          <Col span={16}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <PreviewImage src={DARK_MODE_LIGHT}>
                  <Paragraph className="fw-600">Chế độ sáng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={DARK_MODE_DARK}>
                  <Paragraph className="fw-600">Chế độ tối</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="design-principles" className="mb-20">
        <Title level={2}>Nguyên tắc thiết kế</Title>
        <Paragraph>
          <ol>
            <li className="fw-600 mb-16">Thoải mái về nội dung</li>
            <Row gutter={[16, 16]} className="mb-16">
              <Col span={16}>
                <Paragraph>
                  Tránh sử dụng màu sắc hoặc nội dung có độ tương phản cao ở chế
                  độ tối, vì sử dụng lâu dài sẽ gây cảm giác mệt mỏi.
                  <blockquote>
                    <b>Giao diện Dark Mode mới của WhatsApp bị chê thậm tệ</b>
                    <p>
                      Đây cũng là lý do cơ bản nhất vì nền đen thuần túy với
                      phông chữ màu trắng thực sự rất khó đọc, nó gây ra sự tán
                      xạ hoặc biến dạng thị giác cho nhiều người. Nếu đọc liên
                      tục trong thời gian dài có thể gây chứng mỏi mắt nghiêm
                      trọng.
                    </p>
                  </blockquote>
                </Paragraph>
              </Col>
              <Col span={8}>
                <PreviewImage src={DARK_MODE_COMFORT}>
                  <Paragraph style={{ textAlign: "center" }}>
                    (Nguồn ảnh: The Sun)
                  </Paragraph>
                </PreviewImage>
              </Col>
            </Row>
            <li className="fw-600">Tính nhất quán của thông tin</li>
            <Paragraph className="mb-16">
              Nội dung thông tin ở chế độ tối cần nhất quán với chế độ sáng và
              không được phá vỡ mối quan hệ ban đầu.
            </Paragraph>
          </ol>
        </Paragraph>
      </div>
      <div id="color" className="mb-20">
        <Title level={2}>Màu sắc</Title>
        <div id="color-palette" className="mb-20">
          <Title level={3}>Bảng màu</Title>
          <div className="mb-16">
            <ColorList showSwitch />
          </div>
        </div>
        <div id="color-palette-generator" className="mb-20">
          <Title level={3}>Công cụ tạo bảng màu</Title>
          <Paragraph>
            Chọn màu chủ đạo và màu nền của trang. Công cụ sẽ tạo bảng màu cho
            chế độ tối
          </Paragraph>
          <div className="mb-16">
            <ColorTool showSwitch />
          </div>
        </div>
      </div>
    </ContentDetail>
  );
}
