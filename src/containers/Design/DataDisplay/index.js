import {
  Card,
  Carousel,
  Col,
  Collapse,
  Divider,
  Row,
  Table,
  Timeline,
  Tree,
  Typography,
} from "antd";
import { ContentDetail, PreviewImage } from "components";
import {
  DATA_DISPLAY_TABLE,
  DATA_DISPLAY_COLLAPSE,
  DATA_DISPLAY_CARD,
  DATA_DISPLAY_CAROUSEL,
  DATA_DISPLAY_TREE,
  DATA_DISPLAY_TIMELINE,
} from "img";
import React from "react";

const { Title, Paragraph } = Typography;
const gutter = [16, 16];

const dataSource = [
  {
    key: "1",
    name: "Khải",
    age: 36,
    address: "Hồ Chí Minh",
    interests: "Du lịch",
  },
  {
    key: "2",
    name: "Nhung",
    age: 42,
    address: "Huế",
    interests: "Mua sắm",
  },
  {
    key: "3",
    name: "Hải",
    age: 25,
    address: "An Giang",
    interests: "Đá bóng",
  },
  {
    key: "4",
    name: "Khương",
    age: 19,
    address: "Hà Nội",
    interests: "Game",
  },
];

const columns = [
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Tuổi",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
  },
];

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const treeData = [
  {
    title: "CEO",
    key: "0-0",
    children: [
      {
        title: "Giám đốc sản xuất",
        key: "0-0-1",
        children: [
          {
            title: "Giám đốc dự án 1",
            key: "0-0-1-1",
            children: [
              { title: "Nhân viên sản xuất 1", key: "0-0-1-1-1" },
              { title: "Nhân viên sản xuất 2", key: "0-0-1-1-2" },
              { title: "Nhân viên sản xuất 3", key: "0-0-1-1-3" },
            ],
          },
          {
            title: "Giám đốc dự án 2",
            key: "0-0-1-2",
            children: [
              { title: "Nhân viên sản xuất 1", key: "0-0-1-2-1" },
              { title: "Nhân viên sản xuất 2", key: "0-0-1-2-2" },
              { title: "Nhân viên sản xuất 3", key: "0-0-1-2-3" },
            ],
          },
          {
            title: "Giám đốc dự án 3",
            key: "0-0-1-3",
            children: [
              { title: "Nhân viên sản xuất 1", key: "0-0-1-3-1" },
              { title: "Nhân viên sản xuất 2", key: "0-0-1-3-2" },
              { title: "Nhân viên sản xuất 3", key: "0-0-1-3-3" },
            ],
          },
        ],
      },
      {
        title: "Giám đốc bán hàng",
        key: "0-0-2",
        children: [
          { title: "Nhân viên bán hàng 1", key: "0-0-2-1" },
          { title: "Nhân viên bán hàng 2", key: "0-0-2-2" },
          { title: "Nhân viên bán hàng 3", key: "0-0-2-3" },
        ],
      },
      {
        title: "Giám đốc tài chính",
        key: "0-0-3",
        children: [
          { title: "Chuyên viên tài chính 1", key: "0-0-3-1" },
          { title: "Chuyên viên tài chính 2", key: "0-0-3-2" },
          { title: "Chuyên viên tài chính 3", key: "0-0-3-3" },
        ],
      },
      {
        title: "Giám đốc nhân sự",
        key: "0-0-4",
        children: [
          { title: "Chuyên viên nhân sự 1", key: "0-0-4-1" },
          { title: "Chuyên viên nhân sự 2", key: "0-0-4-2" },
          { title: "Chuyên viên nhân sự 3", key: "0-0-4-3" },
        ],
      },
    ],
  },
];

const timeline = [
  { key: "1", title: "Tạo một trang web dịch vụ", date: "23-07-2022" },
  { key: "2", title: "Giải quyết các sự cố mạng ban đầu", date: "16-03-2022" },
  { key: "3", title: "Kiểm tra kỹ thuật", date: "08-12-2021" },
  { key: "4", title: "Sự cố mạng đang được giải quyết", date: "14-08-2020" },
];

export default function DataDisplay() {
  const anchorList = [
    {
      key: "table",
      href: "#table",
      title: "Bảng (Table)",
    },
    {
      key: "collapse",
      href: "#collapse",
      title: "Thu gọn (Collapse)",
    },
    {
      key: "card",
      href: "#card",
      title: "Thẻ (Card)",
    },
    {
      key: "carousel",
      href: "#carousel",
      title: "Băng chuyền (Carousel)",
    },
    {
      key: "tree",
      href: "#tree",
      title: "Rẽ nhánh (Tree)",
    },
    {
      key: "timeline",
      href: "#timeline",
      title: "Mốc thời gian (Timeline)",
    },
  ];

  const renderInfo = (data) => (
    <>
      <p>Tuổi: {data?.age}</p>
      <p>Sở thích: {data?.interests}</p>
      <p>Địa chỉ: {data?.address}</p>
    </>
  );

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Hiển thị dữ liệu</Title>
      <Paragraph>
        Cách hiển thị dữ liệu phù hợp giúp người dùng nhanh chóng xác định vị
        trí và duyệt dữ liệu. Có những điểm sau cần lưu ý:
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Sắp xếp thứ tự hiển thị theo mức độ quan trọng, tần suất thao tác và
            mức độ liên quan của thông tin.
          </li>
          <li>
            Chú ý đến sự hướng dẫn trong các tình huống đặc biệt(nội dung quá
            dài/trống).
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <div id="table" className="mb-20">
        <Title level={2}>Bảng (Table)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Được công nhận là một trong những cách hiệu quả nhất để trình bày
              dữ liệu. Có cấu trúc đơn giản, rõ ràng, giúp so sánh thông tin dễ
              dàng hơn và cải thiện đáng kể hiệu quả và sự hiểu biết về thông
              tin mà người dùng nhận được.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={DATA_DISPLAY_TABLE}>
              <Card className="card-shadow h-full">
                <Table dataSource={dataSource} columns={columns} rowKey="key" />
              </Card>
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <div id="collapse" className="mb-20">
        <Title level={2}>Thu gọn (Collapse)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Giúp người dùng lấy thông tin dần dần bằng cách nhóm và lưu trữ
              thông tin, giữ cho giao diện gọn gàng và tăng hiệu quả sử dụng
              không gian.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={DATA_DISPLAY_COLLAPSE}>
              <Card className="card-shadow h-full">
                <Collapse defaultActiveKey={["1"]}>
                  {dataSource.map((data) => (
                    <Collapse.Panel header={data.name} key={data.key}>
                      {renderInfo(data)}
                    </Collapse.Panel>
                  ))}
                </Collapse>
              </Card>
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <div id="card" className="mb-20">
        <Title level={2}>Thẻ (Card)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Thẻ là một khối chứa thông tin, nó tập trung một loại thông tin.
              Thích hợp cho hiển thị khối thông tin tương đối nhẹ và được cá
              nhân hóa cao.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={DATA_DISPLAY_CARD}>
              <Card className="card-shadow h-full">
                <Row gutter={gutter}>
                  {dataSource.map((data) => (
                    <Col span={12} key={data.key}>
                      <Card
                        className="card-shadow"
                        title={`${data.name} (Thẻ ${data.key})`}
                      >
                        {renderInfo(data)}
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <div id="carousel" className="mb-20">
        <Title level={2}>Băng chuyền (Carousel)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Nó thường được sử dụng cho băng chuyền hình ảnh hoặc thẻ, có thể
              được người dùng kích hoạt hoặc hệ thống tự động xoay vòng. Phù hợp
              cho các khối hiển thị như trang chủ của trang web chính thức và
              trang giới thiệu sản phẩm.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={DATA_DISPLAY_CAROUSEL}>
              <Card className="card-shadow h-full">
                <Carousel autoplay>
                  {dataSource.map((data) => (
                    <div key={data.key}>
                      <div style={contentStyle}>
                        <h2>{data.name}</h2>
                        <p></p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </Card>
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <div id="tree" className="mb-20">
        <Title level={2}>Rẽ nhánh (Tree)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Giúp hiển thị mối quan hệ phân cấp của thông tin dưới dạng phác
              thảo từng bước. Phù hợp với bất kỳ thông tin nào cần được sắp xếp
              theo thứ bậc, chẳng hạn như thư mục, cơ cấu tổ chức,...
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={DATA_DISPLAY_TREE}>
              <Card className="card-shadow h-full">
                <Tree checkable treeData={treeData} />
              </Card>
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <div id="timeline" className="mb-20">
        <Title level={2}>Mốc thời gian (Timeline)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Hiển thị theo chiều dọc thường ghi lại các sự kiện theo thứ tự
              thời gian đảo ngược. Thích hợp để làm cho các sự kiện, lịch trình,
              các bản trình bày dữ liệu liên quan khác.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={DATA_DISPLAY_TIMELINE}>
              <Card className="card-shadow h-full">
                <Timeline>
                  {timeline.map((time) => (
                    <Timeline.Item key={time.key}>
                      <p className="fw-600">{time.date}</p>
                      <p>{time.title}</p>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </PreviewImage>
          </Col>
        </Row>
      </div>
    </ContentDetail>
  );
}
