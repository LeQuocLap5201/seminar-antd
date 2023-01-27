import { Col, Divider, Row, Typography } from "antd";
import { REFERENCE_LINK } from "common/links";
import {
  Code,
  ColorList,
  ColorTool,
  ContentDetail,
  PreviewImage,
} from "components";
import { BRAND_COLOR, FUNC_COLOR, NEUTRAL_COLOR } from "img";
import React from "react";

const { Title, Paragraph } = Typography;

const code = {
  install: `npm install @ant-design/colors`,
  import: `import { blue } from '@ant-design/colors';
console.log(blue); // ['#E6F7FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
console.log(blue.primary); // '#1890FF'`,
};

export default function Colors() {
  const anchorList = [
    {
      key: "color-model",
      href: "#color-model",
      title: "Mô hình màu sắc",
    },
    {
      key: "system-level-color-system",
      href: "#system-level-color-system",
      title: "Màu hệ thống",
      children: [
        {
          key: "base-color-palettes",
          href: "#base-color-palettes",
          title: "Bảng màu cơ bản",
        },
        {
          key: "neutral-color-palette",
          href: "#neutral-color-palette",
          title: "Bảng màu trung tính",
        },
        {
          key: "data-visualization-color-palette",
          href: "#data-visualization-color-palette",
          title: "Bảng màu minh họa dữ liệu",
        },
        {
          key: "palette-generation-tool",
          href: "#palette-generation-tool",
          title: "Công cụ tạo bảng màu",
        },
        {
          key: "programmatic-usage",
          href: "#programmatic-usage",
          title: "Sử dụng trong lập trình",
        },
      ],
    },
    {
      key: "product-level-color-system",
      href: "#product-level-color-system",
      title: "Màu sản phẩm",
      children: [
        {
          key: "brand-color",
          href: "#brand-color",
          title: "Màu thương hiệu",
        },
        {
          key: "functional-color",
          href: "#functional-color",
          title: "Màu chức năng",
        },
        {
          key: "neutral-color",
          href: "#neutral-color",
          title: "Màu trung tính",
        },
      ],
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Màu sắc</Title>
      <Paragraph>
        Màu của Ant Design có 2 cấp độ:
        <ul>
          <li>
            <span className="fw-600">Màu hệ thống</span>: là bảng màu cơ bản,
            bảng màu trung tính và bảng màu trực quan hóa dữ liệu trong thiết kế
            của Ant Financial.
          </li>
          <li>
            <span className="fw-600">Màu sản phẩm</span>: dựa trên màu sắc chủ
            đạo của sản phẩm để xác định thêm tông màu của sản phẩm theo yêu cầu
            và chức năng.
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <div id="color-model" className="mb-20">
        <Title level={2}>Mô hình màu sắc</Title>
        <Paragraph>
          Đội ngũ thiết kế của Ant Design ưu tiên thiết kế với mô hình màu HSB,
          điều này giúp các nhà thiết kế dễ dàng có tâm lý kỳ vọng rõ ràng về
          màu sắc khi điều chỉnh màu sắc, cũng như tạo điều kiện giao tiếp trong
          nhóm.
        </Paragraph>
        <Paragraph>
          <blockquote>
            <ul>
              <li>
                <span className="fw-600">H</span>: (Hue) Vùng màu
              </li>
              <li>
                <span className="fw-600">S</span>: (Saturation) Độ bão hòa màu
              </li>
              <li>
                <span className="fw-600">B</span>: (Bright) độ sáng
              </li>
            </ul>
            <Paragraph>
              Tìm hiểu thêm{" "}
              <a
                href={REFERENCE_LINK.hsb}
                target="_blank"
                rel="noopener noreferrer"
              >
                tại đây
              </a>
            </Paragraph>
          </blockquote>
        </Paragraph>
      </div>
      <div id="system-level-color-system" className="mb-20">
        <Title level={2}>Màu hệ thống</Title>
        <Paragraph>
          Dựa vào “Sự tự nhiên” và thông qua sự quan sát, để nắm bắt các màu sắc
          khác nhau của ánh sáng tự nhiên theo quy luật thay đổi, với nghệ thuật
          vẽ ý tưởng, Ant Financial đã tạo ra 12 nhóm màu.
        </Paragraph>
      </div>
      <div id="base-color-palettes" className="mb-20">
        <Title level={3}>Bảng màu cơ bản</Title>
        <Paragraph>
          Bảng màu của Ant Design có 120 màu và được chia làm 12 nhóm
        </Paragraph>
        <div className="mb-16">
          <ColorList />
        </div>
        <Paragraph>
          Ngoài các màu trên Ant Design còn cung cấp một công cụ tạo một bảng
          màu dựa vào màu chủ đạo.
        </Paragraph>
      </div>
      <div id="neutral-color-palette" className="mb-20">
        <Title level={3}>Bảng màu trung tính</Title>
        <div className="mb-16">
          <ColorTool isNeutral />
        </div>
      </div>
      <div id="data-visualization-color-palette" className="mb-20">
        <Title level={3}>Bảng màu minh họa dữ liệu</Title>
        <Paragraph>
          Dựa trên bảng màu cơ bản và bảng màu trung tính, đồng thời dựa trên
          nguyên tắc "hiệu quả, rõ ràng, chính xác và đẹp" của{" "}
          <a
            href={REFERENCE_LINK.antv}
            target="_blank"
            rel="noopener noreferrer"
          >
            AntV
          </a>
          .
        </Paragraph>
      </div>
      <div id="palette-generation-tool" className="mb-20">
        <Title level={3}>Công cụ tạo bảng màu</Title>
        <Paragraph>
          Nếu các bảng màu trên không đáp ứng nhu cầu của bạn, bạn có thể chọn
          một màu chủ đạo và với thuật toán tạo màu của Ant Design sẽ tạo ra một
          bảng màu cho bạn.
        </Paragraph>
        <div className="mb-16">
          <ColorTool />
        </div>
      </div>
      <div id="programmatic-usage" className="mb-20">
        <Title level={3}>Sử dụng trong lập trình</Title>
        <Paragraph>
          Chúng tôi cung cấp cách sử dụng JavaScript cho các nhà phát triển.
        </Paragraph>
        <Code code={code.install} />
        <Code code={code.import} />
        <Paragraph>
          Xem thêm:{" "}
          <a
            href={REFERENCE_LINK.colors}
            target="_blank"
            rel="noopener noreferrer"
          >
            @ant-design/colors
          </a>
        </Paragraph>
      </div>
      <div id="product-level-color-system" className="mb-20">
        <Title level={2}>Màu sản phẩm</Title>
      </div>
      <div id="brand-color" className="mb-20">
        <Title level={3}>Màu thương hiệu</Title>
        <Row>
          <Col span={14}>
            <Paragraph>
              Màu thương hiệu là một trong những yếu tố hình ảnh trực quan nhất
              được sử dụng để thể hiện các đặc tính của sản phẩm và truyền đạt ý
              tưởng. Khi chọn màu, điều quan trọng là phải hiểu cách màu thương
              hiệu được sử dụng trong giao diện người dùng.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={BRAND_COLOR} />
          </Col>
        </Row>
      </div>
      <div id="functional-color" className="mb-20">
        <Title level={3}>Màu chức năng</Title>
        <Row>
          <Col span={14}>
            <Paragraph>
              Màu chức năng thể hiện một thông điệp rõ ràng cũng như trạng thái,
              chẳng hạn như thành công, lỗi, thất bại, liên kết, ... Lựa chọn
              màu chức năng cần tuân thủ sự hiểu biết cơ bản của người dùng về
              màu sắc. Các màu chức năng nên được giữ nhất quán nhất có thể
              trong một tập hợp các hệ thống sản phẩm. Không có quá nhiều tùy
              biến can thiệp vào trải nghiệm nhận thức của người dùng.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={FUNC_COLOR} />
          </Col>
        </Row>
      </div>
      <div id="neutral-color" className="mb-20">
        <Title level={3}>Màu trung tính</Title>
        <Row>
          <Col span={14}>
            <Paragraph>
              Màu trung tính chủ yếu được sử dụng trong phần lớn giao diện văn
              bản, màu nền, đường viền,... Định nghĩa màu trung tính cần xem xét
              sự khác biệt giữa nền tối và nền sáng, đồng thời kết hợp tiêu
              chuẩn{" "}
              <a
                href={REFERENCE_LINK.wcag}
                target="_blank"
                rel="noopener noreferrer"
              >
                WCAG 2.0
              </a>
              . Màu trung tính của Ant Design dựa trên độ trong suốt.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={NEUTRAL_COLOR} />
          </Col>
        </Row>
      </div>
    </ContentDetail>
  );
}
