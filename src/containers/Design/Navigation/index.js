import { Card, Col, Divider, Radio, Row, Tabs, Typography } from "antd";
import { ContentDetail, PreviewImage } from "components";
import {
  NAV_BREADCRUMB,
  NAV_PAGINATION_BASIC,
  NAV_PAGINATION_MINI,
  NAV_PAGINATION_SIMPLE,
  NAV_SLIDE_NAV,
  NAV_STEPS_HORIZONTAL,
  NAV_STEPS_VERTICAL,
  NAV_TABS_BASIC,
  NAV_TABS_CARD,
  NAV_TABS_PILL,
  NAV_TABS_VERTICAL,
  NAV_TOP_NAV,
} from "img";
import { useState } from "react";
import LayoutExample from "../Layout/components/LayoutExample";
import PaginationDemo from "./PaginationDemo";
import StepsDemo from "./StepsDemo";

const { Title, Paragraph } = Typography;
const gutter = [16, 16];

const createdTabsItem = (number) =>
  new Array(number).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Tab ${id}`,
      key: id,
      children: `Nội dung của Tab ${id}`,
    };
  });

const createdStepsItem = (number) =>
  new Array(number).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      title: `Bước ${id}`,
      key: id,
      content: `Nội dung của bước ${id}`,
      description: `Mô tả của bước ${id}`,
    };
  });

export default function Navigation() {
  const [size, setSize] = useState("small");

  const onChange = (e) => {
    setSize(e.target.value);
  };

  const anchorList = [
    {
      key: "menu",
      href: "#menu",
      title: "Bảng chọn điều hướng (Menu)",
      children: [
        {
          key: "top-navigation",
          href: "#top-navigation",
          title: "Điều hướng trên cùng",
        },
        {
          key: "side-navigation",
          href: "#side-navigation",
          title: "Điều hướng bên",
        },
      ],
    },
    {
      key: "breadcrumb",
      href: "#breadcrumb",
      title: "Định vị trang (Breadcrumb)",
    },
    {
      key: "tabs",
      href: "#tabs",
      title: "Trang đánh dấu trang (Tabs)",
      children: [
        {
          key: "basic",
          href: "#basic",
          title: "Cơ bản",
        },
        {
          key: "card",
          href: "#card",
          title: "Thẻ",
        },
        {
          key: "pill",
          href: "#pill",
          title: "Con nhộng",
        },
        {
          key: "vertical",
          href: "#vertical",
          title: "Chiều dọc",
        },
      ],
    },
    {
      key: "steps",
      href: "#steps",
      title: "Nhiều bước (Steps)",
      children: [
        {
          key: "horizontal",
          href: "#horizontal",
          title: "Chiều ngang",
        },
        {
          key: "vertical-1",
          href: "#vertical-1",
          title: "Chiều dọc",
        },
      ],
    },
    {
      key: "pagination",
      href: "#pagination",
      title: "Phân trang (Pagination)",
      children: [
        {
          key: "basic-1",
          href: "#basic-1",
          title: "Cơ bản",
        },
        {
          key: "mini",
          href: "#mini",
          title: "Nhỏ gọn",
        },
        {
          key: "simple",
          href: "#simple",
          title: "Đơn giản",
        },
      ],
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Điều hướng</Title>
      <Paragraph>
        Theo nghĩa rộng, bất kỳ cách nào cho người dùng biết họ đang ở đâu, họ
        có thể đi đâu và làm thế nào để đến đó đều có thể được gọi là điều
        hướng. Khi các nhà thiết kế sử dụng điều hướng hoặc tùy chỉnh một số cấu
        trúc điều hướng, vui lòng lưu ý:
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Cung cấp các thông tin càng nhiều càng tốt, để ngăn người dùng bị
            lạc.
          </li>
          <li>
            Duy trì sự nhất quán, hoặc giảm số lượng mục trong điều hướng, để
            giảm thao tác của người dùng.
          </li>
          <li>
            Giảm thiểu số lần nhảy giữa các trang càng nhiều càng tốt (ví dụ:
            khi một tác vụ thông thường cần nhảy nhiều trang, vui lòng giảm
            xuống một hoặc hai trang).
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <div id="menu" className="mb-20">
        <Title level={2}>Bảng chọn điều hướng (Menu)</Title>
        <Paragraph>
          Bảng chọn điều hướng là một cách hiệu quả để trình bày thông tin nội
          dung cho người dùng một cách thân thiện. Sau khi xác định được cấu
          trúc thông tin của website, lựa chọn kiểu bảng chọn điều hướng phù hợp
          theo yêu cầu.
        </Paragraph>
      </div>
      <div id="top-navigation" className="mb-20">
        <Title level={3}>Điều hướng trên cùng (Top Navigation)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Số lượng mục menu cấp đầu tiên phải từ 2 đến 7. Tiêu đề cho mỗi
              mục menu phải chứa ít hơn 15 ký tự.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={NAV_TOP_NAV} />
          </Col>
        </Row>
      </div>
      <div id="side-navigation" className="mb-20">
        <Title level={3}>Điều hướng bên (Side Navigation)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Phù hợp cho các ứng dụng web đa cấp, hoạt động chuyên sâu và giống
              như bảng điều khiển.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={NAV_SLIDE_NAV} />
          </Col>
        </Row>
        <LayoutExample showSwitch isNav />
      </div>
      <div id="breadcrumb" className="mb-20">
        <Title level={2}>Định vị trang (Breadcrumb)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Giúp người dùng biết hiện họ đang ở đâu trong ứng dụng.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={NAV_BREADCRUMB} />
          </Col>
        </Row>
      </div>
      <div id="tabs" className="mb-20">
        <Title level={2}>Trang đánh dấu trang (Tabs)</Title>
        <Paragraph>
          Để hiển thị lượng lớn thông tin trong một không gian hạn chế. Người
          dùng có thể dễ dàng chuyển đổi giữa các bảng tab. Tên mỗi tab nên chứa
          ít hơn 15 ký tự.
        </Paragraph>
      </div>
      <div id="basic" className="mb-20">
        <Title level={3}>Cơ bản</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_TABS_BASIC} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full">
              <Tabs defaultActiveKey="1" items={createdTabsItem(3)} />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="card" className="mb-20">
        <Title level={3}>Thẻ</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_TABS_CARD} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full">
              <Tabs
                defaultActiveKey="1"
                items={createdTabsItem(3)}
                type="card"
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="pill" className="mb-20">
        <Title level={3}>Con nhộng</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_TABS_PILL} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full">
              <Radio.Group
                value={size}
                onChange={onChange}
                style={{
                  marginBottom: 16,
                }}
              >
                <Radio.Button value="small">Nhỏ</Radio.Button>
                <Radio.Button value="middle">Vừa</Radio.Button>
                <Radio.Button value="large">Lớn</Radio.Button>
              </Radio.Group>
              <Tabs
                defaultActiveKey="1"
                size={size}
                style={{
                  marginBottom: 32,
                }}
                items={createdTabsItem(3)}
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="vertical" className="mb-20">
        <Title level={3}>Chiều dọc</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_TABS_VERTICAL} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full">
              <Tabs
                defaultActiveKey="1"
                tabPosition="left"
                style={{
                  height: 220,
                }}
                items={createdTabsItem(5)}
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="steps" className="mb-20">
        <Title level={2}>Nhiều bước (Steps)</Title>
        <Paragraph>
          Hướng dẫn người dùng thực hiện một tác vụ theo một quy trình làm việc
          được xác định trước theo từng bước.
        </Paragraph>
      </div>
      <div id="horizontal" className="mb-20">
        <Title level={3}>Chiều ngang</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_STEPS_HORIZONTAL} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full flex-center">
              <StepsDemo items={createdStepsItem(3)} />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="vertical-1" className="mb-20">
        <Title level={3}>Chiều dọc</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_STEPS_VERTICAL} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full flex-center">
              <StepsDemo items={createdStepsItem(3)} isVertical />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="pagination" className="mb-20">
        <Title level={2}>Phân trang (Pagination)</Title>
        <Paragraph>
          Được sử dụng để phân trang những trang có nội dung lớn. Người dùng có
          thể biết rõ ràng tổng lượng nội dung, bao nhiêu họ đã duyệt và bao
          nhiêu còn lại được duyệt.
        </Paragraph>
      </div>
      <div id="basic-1" className="mb-20">
        <Title level={3}>Cơ bản</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_PAGINATION_BASIC} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full flex-center">
              <PaginationDemo total={500} />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="mini" className="mb-20">
        <Title level={3}>Nhỏ gọn</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_PAGINATION_MINI} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full flex-center">
              <PaginationDemo type="mini" />
            </Card>
          </Col>
        </Row>
      </div>
      <div id="simple" className="mb-20">
        <Title level={3}>Đơn giản</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={NAV_PAGINATION_SIMPLE} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full flex-center">
              <PaginationDemo type="simple" />
            </Card>
          </Col>
        </Row>
      </div>
    </ContentDetail>
  );
}
