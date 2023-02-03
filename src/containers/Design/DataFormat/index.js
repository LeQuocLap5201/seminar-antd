import {
  Avatar,
  Card,
  Col,
  List,
  Row,
  Skeleton,
  Switch,
  Table,
  Typography,
} from "antd";
import { REFERENCE_LINK } from "common/links";
import { ContentDetail, PreviewImage } from "components";
import {
  DATA_FORMAT_NUMERICAL_GOOD,
  DATA_FORMAT_NUMERICAL_BAD,
  DATA_FORMAT_REDACTION_GOOD,
  DATA_FORMAT_REDACTION_BAD,
  DATA_FORMAT_EMPTY_GOOD,
  DATA_FORMAT_EMPTY_BAD,
  DATA_FORMAT_LOADING,
} from "img";
import React, { useState } from "react";

const { Title, Paragraph } = Typography;
const gutter = [16, 16];

const commonColumns = [
  {
    title: "Cách sử dụng",
    dataIndex: "using",
    key: "using",
  },
  {
    title: "Ví dụ",
    dataIndex: "ex",
    key: "ex",
  },
];

const numericalData = [
  {
    key: "1",
    format: "Số thập phân",
    using:
      "Dùng dấu phẩy để phân tách các nhóm hàng nghìn để giúp người dùng dễ đọc.",
    ex: "123,123,220",
  },
  {
    key: "2",
    format: "Đơn vị đo lường",
    using: "Viết đơn vị đo bằng chữ thường.",
    ex: "123,220kg",
  },
  {
    key: "3",
    format: "Tỷ lệ phần trăm",
    using: "Để trình bày tỷ lệ,...",
    ex: "12.32%",
  },
  {
    key: "4",
    format: "Dấu gạch chéo",
    using: "Để thể hiện tiến độ",
    ex: "12/30",
  },
];

const amountData = [
  {
    key: "1",
    symbol: "Ký hiệu",
    using: (
      <>
        Lấy Đô-la Mỹ làm ví dụ, ký hiệu ký tự của nó là <code>$</code>, được đặt
        trước số tiền.
      </>
    ),
    ex: "$23",
  },
  {
    key: "2",
    symbol: "Mã tiền tệ",
    using: (
      <>
        Lấy Đô-la Mỹ làm ví dụ, nên sử dụng <code>USD</code>, là mã tiền tệ quốc
        tế.
      </>
    ),
    ex: "USD23",
  },
];

const dateData = [
  {
    key: "1",
    format: "Năm, tháng, ngày",
    using: "Dùng định dạng DD-MM-YYYY.",
    ex: "03-02-2023",
  },
  {
    key: "2",
    format: "Khoảng ngày",
    using: (
      <>
        Dùng <code>~</code> hoặc <code>-</code>.
      </>
    ),
    ex: "24-09-2022 ~ 28-12-2022",
  },
];

const timeData = [
  {
    key: "1",
    system: "24 giờ",
    using: (
      <>
        Định dạng thời gian 24 giờ <code>HH:mm:ss</code>.
      </>
    ),
    ex: "14:08:00",
  },
  {
    key: "2",
    system: "12 giờ",
    using: (
      <>
        Định dạng thời gian 12 giờ <code>h:mm:ss</code>.
      </>
    ),
    ex: "2:08:00 PM | 2:08:00 AM",
  },
];

const relativeTimeData = [
  {
    key: "1",
    time: "Chưa tới 1 phút",
    ex: "ngay bây giờ",
  },
  {
    key: "2",
    time: "Chưa tới 1 giờ",
    ex: "? phút trước",
  },
  {
    key: "3",
    time: "Trong vòng 24 giờ",
    ex: "? giờ trước",
  },
  {
    key: "4",
    time: "Hơn 24 giờ",
    ex: (
      <>
        <code>DD-MM HH:MM</code>, vd: "08-12 08:00"
      </>
    ),
  },
  {
    key: "5",
    time: "Hơn 1 năm",
    ex: (
      <>
        <code>DD-MM-YYYY HH:MM</code>, vd: "09-10-2022 08:00"
      </>
    ),
  },
];

const redactionData = [
  {
    key: "1",
    type: "Tên",
    using: (
      <>
        Tên hai ký tự/từ: hiển thị ký tự/từ đầu tiên, tiếp theo là dấu{" "}
        <code>*</code>.
      </>
    ),
    ex: "Trung*",
  },
  {
    key: "2",
    type: "",
    using: (
      <>
        Tên có 3 ký tự/từ trở lên: hiển thị ký tự/từ đầu và ký tự/từ cuối, thay
        (các) ký tự ở giữa bằng <code>*</code>.
      </>
    ),
    ex: (
      <>
        <p>Trần*Nam</p>
        <p>Bách**Huy</p>
      </>
    ),
  },
  {
    key: "3",
    type: "Số điện thoại",
    using:
      "Giữ ba chữ số đầu tiên và bốn chữ số cuối cùng của số điện thoại di động.",
    ex: "098****402",
  },
  {
    key: "4",
    type: "Số ID",
    using: (
      <>
        <p>
          Quy tắc chỉnh sửa được phân loại thành cấp độ cao, trung bình và thấp:
        </p>
        <p>
          <span className="fw-600">Cao</span>: Hiển thị chữ số đầu tiên và chữ
          số cuối cùng, đồng thời thay thế các chữ số khác bằng <code>*</code>.
        </p>
        <p>
          <span className="fw-600">Trung bình</span>: Hiển thị ba cái đầu tiên
          và ba cái cuối cùng. Thay thế những cái khác bằng <code>*</code>.
        </p>
        <p>
          <span className="fw-600">Thấp</span>: Hiển thị sáu đầu tiên và bốn
          cuối cùng. Thay thế những cái khác bằng <code>*</code>.
        </p>
      </>
    ),
    ex: (
      <>
        <p>6*************2</p>
        <p>213***********203</p>
        <p>212912******2233</p>
      </>
    ),
  },
  {
    key: "5",
    type: "Địa chỉ",
    using: (
      <>
        Giữ thông tin tỉnh, thành phố và huyện, theo sau là một số{" "}
        <code>*</code>.
      </>
    ),
    ex: "*****, Bình Thạnh, TP.Hồ Chí Minh",
  },
  {
    key: "6",
    type: "Email",
    using: (
      <>
        Giữ tên miền và ba ký tự đầu tiên, cho biết thông tin còn lại bằng{" "}
        <code>*</code>.
      </>
    ),
    ex: "123*******@163.com",
  },
  {
    key: "7",
    type: "Số thẻ ngân hàng",
    using: (
      <>
        <p>
          Quy tắc chỉnh sửa được phân loại thành cấp độ cao, trung bình và thấp:
        </p>
        <p>
          <span className="fw-600">Cao</span>: Hiển thị bốn chữ số cuối và thay
          thế các chữ số khác bằng <code>*</code>.
        </p>
        <p>
          <span className="fw-600">Trung bình</span>: Hiển thị sáu chữ số đầu
          tiên và bốn chữ số cuối cùng, thay thế các chữ số khác bằng{" "}
          <code>*</code>.
        </p>
        <p>
          <span className="fw-600">Thấp</span>: Hiển thị sáu số đầu và sáu số
          cuối, hiển thị các số còn lại có dấu <code>*</code>.
        </p>
      </>
    ),
    ex: (
      <>
        <p>********1208</p>
        <p>620121**1208</p>
        <p>620121****111208</p>
      </>
    ),
  },
];

const createdListData = (number = 1) =>
  new Array(number).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      href: "https://ant.design",
      title: `Ant Design ${id}`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description: "Ant Design, một ngôn ngữ thiết kế cho các ứng dụng nền.",
    };
  });

export default function DataFormat() {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };

  const anchorList = [
    {
      key: "design-goals",
      href: "#design-goals",
      title: "Mục tiêu thiết kế",
    },
    {
      key: "types",
      href: "#types",
      title: "Loại",
      children: [
        {
          key: "numerical",
          href: "#numerical",
          title: "Số",
        },
        {
          key: "amount",
          href: "#amount",
          title: "Số  tiền",
        },
        {
          key: "datetime",
          href: "#datetime",
          title: "Ngày giờ",
        },
        {
          key: "data-redaction",
          href: "#data-redaction",
          title: "Xử lý dữ liệu",
        },
        {
          key: "data-status",
          href: "#data-status",
          title: "Trạng thái dữ liệu",
        },
      ],
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Định dạng dữ liệu</Title>
      <div id="design-goals" className="mb-20">
        <Title level={2}>Mục tiêu thiết kế</Title>
        <Paragraph>
          Chuẩn hóa biểu thức dữ liệu để đảm bảo hiểu dữ liệu một cách trực
          quan, chính xác và nhất quán.
        </Paragraph>
      </div>
      <div id="types" className="mb-20">
        <Title level={2}>Loại</Title>
      </div>
      <div id="numerical" className="mb-20">
        <Title level={3}>Số</Title>
        <Card className="card-shadow mt-16 mb-16">
          <Table
            rowKey="key"
            columns={[
              {
                title: "Định dạng",
                dataIndex: "format",
                key: "format",
              },
              ...commonColumns,
            ]}
            dataSource={numericalData}
            pagination={false}
          />
        </Card>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              <span className="fw-600">Vị trí</span>: Để người dùng đọc dữ liệu
              một cách trực quan và chính xác thì cần trình bày rõ ràng, ngắn
              gọn. Trong một bảng có các giá trị số, phương pháp "căn phải"
              thường được áp dụng, điều này không chỉ tạo điều kiện cho người
              dùng đọc nhanh mà còn cho phép người dùng so sánh dữ liệu theo
              chiều dọc.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={DATA_FORMAT_NUMERICAL_GOOD} status="good">
                  <Paragraph className="fw-600">Nên</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={DATA_FORMAT_NUMERICAL_BAD} status="bad">
                  <Paragraph className="fw-600">Không nên</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="amount" className="mb-20">
        <Title level={3}>Số tiền</Title>
        <Paragraph>
          <span className="fw-600">Định dạng số tiền</span>: Định dạng chuẩn là
          "ký hiệu tiền tệ + số tiền". Bạn có thể kiểm tra các biểu tượng cho
          các loại tiền tệ khác nhau từ{" "}
          <a
            href={REFERENCE_LINK.currencySymbol}
            target="_blank"
            rel="noopener noreferrer"
          >
            BIỂU TƯỢNG TIỀN TỆ
          </a>
          .
        </Paragraph>
        <Card className="card-shadow mt-16 mb-16">
          <Table
            rowKey="key"
            columns={[
              {
                title: "Ký hiệu tiền tệ",
                dataIndex: "symbol",
                key: "symbol",
              },
              ...commonColumns,
            ]}
            dataSource={amountData}
            pagination={false}
          />
        </Card>
        <Paragraph>
          Số lượng lớn: Nếu số lượng lớn, "M/Mill." (viết tắt của triệu) và
          "B/Bill." (viết tắt của tỷ) có thể được sử dụng.
        </Paragraph>
      </div>
      <div id="datetime" className="mb-20">
        <Title level={3}>Ngày giờ</Title>
        <Title level={4}>Định dạng ngày</Title>
        <Card className="card-shadow mt-16 mb-16">
          <Table
            rowKey="key"
            columns={[
              {
                title: "Định dạng",
                dataIndex: "format",
                key: "format",
              },
              ...commonColumns,
            ]}
            dataSource={dateData}
            pagination={false}
          />
        </Card>
        <Title level={4}>Định dạng giờ</Title>
        <Card className="card-shadow mt-16 mb-16">
          <Table
            rowKey="key"
            columns={[
              {
                title: "Hệ thống giờ",
                dataIndex: "system",
                key: "system",
              },
              ...commonColumns,
            ]}
            dataSource={timeData}
            pagination={false}
          />
        </Card>
        <Title level={4}>Thời gian tương đối</Title>
        <Card className="card-shadow mt-16 mb-16">
          <Table
            rowKey="key"
            columns={[
              {
                title: "Thời gian",
                dataIndex: "time",
                key: "time",
              },
              {
                title: "Hiển thị",
                dataIndex: "ex",
                key: "ex",
              },
            ]}
            dataSource={relativeTimeData}
            pagination={false}
          />
        </Card>
      </div>
      <div id="data-redaction" className="mb-20">
        <Title level={3}>Xử lý dữ liệu</Title>
        <Paragraph>
          Đề cập đến việc đại diện cho dữ liệu bị cắt bớt để bảo vệ thông tin
          nhạy cảm về quyền riêng tư.
        </Paragraph>
        <Title level={4}>Bảo vệ toàn bộ thông tin</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Thường được sử dụng cho các thông tin đặc biệt quan trọng cần phải
              được ẩn. Và dữ liệu được thay thế bằng <code>***</code>.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={DATA_FORMAT_REDACTION_GOOD} status="good">
                  <Paragraph className="fw-600">Nên</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={DATA_FORMAT_REDACTION_BAD} status="bad">
                  <Paragraph className="fw-600">Không nên</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
        <Title level={4}>Bảo vệ một phần thông tin</Title>
        <Paragraph>
          Thường được sử dụng khi một phần thông tin cần để nhận dạng. Trong
          những trường hợp như vậy, một phần thông tin bị cắt bớt và được thay
          thế bằng <code>*</code>.
        </Paragraph>
        <Card className="card-shadow mt-16 mb-16">
          <Table
            rowKey="key"
            columns={[
              {
                title: "Loại dữ liệu",
                dataIndex: "type",
                key: "type",
              },
              ...commonColumns,
            ]}
            dataSource={redactionData}
            pagination={false}
          />
        </Card>
      </div>
      <div id="data-status" className="mb-20">
        <Title level={3}>Trạng thái dữ liệu</Title>
        <Title level={4}>Không có dữ liệu</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Dùng <code>--</code> để thể hiện trạng thái không có dữ liệu.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={DATA_FORMAT_EMPTY_GOOD} status="good">
                  <Paragraph className="fw-600">Nên</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={DATA_FORMAT_EMPTY_BAD} status="bad">
                  <Paragraph className="fw-600">Không nên</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
        <Title level={4}>Tải dữ liệu</Title>
        <Row gutter={gutter}>
          <Col span={12}>
            <PreviewImage src={DATA_FORMAT_LOADING} />
          </Col>
          <Col span={12}>
            <Card className="card-shadow h-full">
              <Switch
                checked={!loading}
                onChange={onChange}
                className="mb-16"
              />
              <List
                itemLayout="vertical"
                size="small"
                dataSource={createdListData(3)}
                renderItem={(item) => (
                  <List.Item key={item.title}>
                    <Skeleton loading={loading} active avatar>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                    </Skeleton>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </ContentDetail>
  );
}
