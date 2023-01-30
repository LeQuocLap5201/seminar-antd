import { LoadingOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Col,
  Divider,
  Form,
  Input,
  message,
  Modal,
  notification,
  Popover,
  Row,
  Space,
  Spin,
  Tooltip,
  Typography,
} from "antd";
import { ContentDetail, PreviewImage } from "components";
import {
  FEEDBACK_ALERT,
  FEEDBACK_BADGE,
  FEEDBACK_DIALOG,
  FEEDBACK_INPUT_ERROR,
  FEEDBACK_LOADING,
  FEEDBACK_MESSAGE,
  FEEDBACK_MESSAGE_BAD,
  FEEDBACK_MESSAGE_GOOD,
  FEEDBACK_NOTI,
  FEEDBACK_POPCONFIRM,
  FEEDBACK_POPOVER,
  FEEDBACK_PROGRESS,
  FEEDBACK_TOOLTIP,
} from "img";
import { useState } from "react";
import BadgeDemo from "./components/BadgeDemo";
import PopconfirmDemo from "./components/PopconfirmDemo";
import ProgressDemo from "./components/ProgressDemo";

const { Title, Paragraph } = Typography;
const gutter = [16, 16];

const openNotification = () => {
  notification.open({
    message: "Tiêu đề thông báo",
    description:
      "Đây là nội dung của thông báo. Đây là nội dung của thông báo. Đây là nội dung của thông báo.",
  });
};

export default function Feedback() {
  const [demo, setDemo] = useState({
    alert: false,
    badge: false,
    popover: false,
    tooltip: false,
    loading: false,
    progress: false,
    input: false,
    popconfirm: false,
  });

  const [loading, setLoading] = useState(false);

  const anchorList = [
    {
      key: "prompt-message",
      href: "#prompt-message",
      title: "Thông báo nhắc nhở",
      children: [
        {
          key: "alert",
          href: "#alert",
          title: "Cảnh báo",
        },
        {
          key: "notification",
          href: "#notification",
          title: "Thông báo",
        },
        {
          key: "help",
          href: "#help",
          title: "Hỗ trợ",
        },
      ],
    },
    {
      key: "process-feedback",
      href: "#process-feedback",
      title: "Phản hồi tiến trình",
      children: [
        {
          key: "loading-status-progress-feedback",
          href: "#loading-status-progress-feedback",
          title: "Trạng thái “Đang tải” của phản hồi",
        },
        {
          key: "input-feedback",
          href: "#input-feedback",
          title: "Phản hồi nhập liệu",
        },
      ],
    },
    {
      key: "result-feedback",
      href: "#result-feedback",
      title: "Phản hồi kết quả",
      children: [
        {
          key: "message",
          href: "#message",
          title: "Tin nhắn",
        },
        {
          key: "dialog-feedback",
          href: "#dialog-feedback",
          title: "Hộp thoại phản hồi",
        },
      ],
    },
  ];

  const handleToggle = (key) => {
    setDemo({ ...demo, [key]: !demo[key] });
  };

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Phản hồi</Title>
      <Paragraph>
        Để giúp người dùng hiểu ứng dụng hiện đang làm gì nên khi người dùng cần
        tương tác với hệ thống, hãy sử dụng các chế độ khác nhau để phản hồi
        thông tin hoặc kết quả. Khi nhà thiết kế sử dụng phản hồi hoặc tùy chỉnh
        một số phản hồi, cần lưu ý:
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Cung cấp cho người dùng những phản hồi cần thiết, tích cực và ngay
            lập tức ở tất cả các giai đoạn.
          </li>
          <li>
            Tránh phản hồi quá nhiều, để không gây ra những xáo trộn không đáng
            có cho người dùng.
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <div id="prompt-message" className="mb-20">
        <Title level={2}>Thông báo nhắc nhở</Title>
        <Paragraph className="mb-20">
          Thông báo nhắc nhở được sử dụng để cho người dùng biết những gì cần
          biết và hành động cần thực hiện.
        </Paragraph>
      </div>
      <div id="alert" className="mb-20">
        <Title level={3}>Cảnh báo (Alert)</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Là một màn hình hiển thị thông tin cảnh báo. Nó không làm gián
              đoạn thao tác hiện tại của người dùng. Hiển thị và sẽ không tự
              động biến mất. Người dùng có thể bấm tắt.
            </Paragraph>
            <Paragraph>
              <blockquote>
                Lưu ý: Nút đóng có thể thêm hoặc ẩn tùy theo nhu cầu công việc.
              </blockquote>
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={FEEDBACK_ALERT}>
              <Button type="primary" onClick={() => handleToggle("alert")}>
                Demo
              </Button>
              {demo.alert ? (
                <Space
                  direction="vertical"
                  style={{
                    width: "100%",
                    marginBlock: 20,
                  }}
                >
                  <Alert message="Mẹo thành công" type="success" showIcon />
                  <Alert message="Ghi chú thông tin" type="info" showIcon />
                  <Alert message="Cảnh báo" type="warning" showIcon closable />
                  <Alert message="Lỗi" type="error" showIcon />
                </Space>
              ) : null}
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <div id="notification" className="mb-20">
        <Title level={3}>Thông báo</Title>
        <div id="notification-1" className="mb-20">
          <Title level={4}>Thông báo (Notification)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>Thông báo của ứng dụng.</Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_NOTI}>
                <Paragraph>
                  Được sử dụng khi nội dung thông báo phức tạp
                </Paragraph>
                <Button type="primary" onClick={openNotification}>
                  Demo
                </Button>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="badge" className="mb-20">
          <Title level={4}>Huy hiệu (Badge)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Thường xuất hiện ở góc trên bên phải của biểu tượng thông báo
                hoặc hình đại diện nhằm thu hút mắt người dùng.
              </Paragraph>
              <Paragraph>
                <blockquote>
                  Lưu ý: Lời nhắc thông tin tương đối quan trọng và liên quan
                  đến người dùng, hãy sử dụng lời nhắc chính xác bằng những con
                  số, ngược lại hãy sử dụng dấu chấm đỏ để đưa ra lời khuyên.
                </blockquote>
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_BADGE}>
                {demo.badge ? (
                  <Space direction="vertical" className="w-full mb-16 mt-16">
                    <BadgeDemo />
                    <BadgeDemo isDot />
                  </Space>
                ) : null}
                <Button type="primary" onClick={() => handleToggle("badge")}>
                  Demo
                </Button>
              </PreviewImage>
            </Col>
          </Row>
        </div>
      </div>
      <div id="help" className="mb-20">
        <Title level={3}>Hỗ trợ</Title>
        <div id="tooltip" className="mb-20">
          <Title level={4}>Chú thích (Tooltip)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Sử dụng để mô tả chính xác đối tượng được trỏ.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_TOOLTIP}>
                <Tooltip title="Đây là nút">
                  <Button type="primary">Demo</Button>
                </Tooltip>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="popover" className="mb-20">
          <Title level={4}>Bong bóng thông báo (Popover)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Khi đối tượng được trỏ có thêm mô tả và các hoạt động liên quan,
                nó có thể được lưu trữ trong đối tượng và hiển thị theo hành vi
                hoạt động của người dùng.
              </Paragraph>
              <Paragraph>
                <blockquote>
                  Lưu ý: Sự khác biệt giữa Tooltip và Popover là Popover có thể
                  mang nội dung phức tạp hơn, chẳng hạn như liên kết hoặc nút.
                </blockquote>
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_POPOVER}>
                {demo.popover ? (
                  <Form style={{ width: "50%" }} className="mb-20">
                    <Form.Item label="Email" name="email">
                      <Popover
                        content={
                          <Space direction="vertical">
                            <Paragraph>Hướng dẫn nhập Email ...</Paragraph>
                            <a
                              href="https://www.thegioididong.com/hoi-dap/huong-dan-dang-nhap-tai-khoan-google-tai-khoan-t-649899"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Xem thêm tại đây
                            </a>
                          </Space>
                        }
                        trigger="focus"
                        placement="right"
                      >
                        <Input />
                      </Popover>
                    </Form.Item>
                  </Form>
                ) : null}
                <Button type="primary" onClick={() => handleToggle("popover")}>
                  Demo
                </Button>
              </PreviewImage>
            </Col>
          </Row>
        </div>
      </div>
      <div id="process-feedback" className="mb-20">
        <Title level={2}>Phản hồi tiến trình</Title>
        <Paragraph>
          Dùng càng nhiều càng tốt trong quá trình hoạt động và phản hồi ngay
          lập tức sẽ mang lại cho người dùng cảm giác tin cậy.
        </Paragraph>
        <div id="loading-status-progress-feedback" className="mb-20">
          <Title level={3}>Trạng thái “Đang tải” của phản hồi</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Khi thao tác mất một khoảng thời gian (thường là hơn 2 giây) để
                hoàn thành, hệ thống sẽ đưa ra lời nhắc ngay lập tức, thông báo
                rõ ràng về trạng thái tải hoặc thanh tiến trình tải và duy trì
                liên lạc với người dùng.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_LOADING}>
                {demo.loading ? (
                  <Space
                    className="mb-16  w-full"
                    style={{ justifyContent: "space-around" }}
                  >
                    <Button
                      type="primary"
                      onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                        }, 5000);
                      }}
                      loading={loading}
                    >
                      Tải dữ liệu
                    </Button>
                    <Spin
                      indicator={
                        <LoadingOutlined
                          style={{
                            fontSize: 24,
                          }}
                          spin
                        />
                      }
                    />
                    <Spin />
                  </Space>
                ) : null}
                <Button type="primary" onClick={() => handleToggle("loading")}>
                  Demo
                </Button>
              </PreviewImage>
            </Col>
            <Col span={14}>
              <Paragraph>
                <blockquote>
                  Lưu ý: Nếu thời gian tải lâu, nên cung cấp thao tác hủy.
                </blockquote>
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_PROGRESS}>
                {demo.progress ? (
                  <Row gutter={gutter} className="mb-20">
                    <Col span={12}>
                      <ProgressDemo />
                    </Col>
                    <Col span={12}>
                      <ProgressDemo isCircle />
                    </Col>
                  </Row>
                ) : null}
                <Button type="primary" onClick={() => handleToggle("progress")}>
                  Demo
                </Button>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="input-feedback" className="mb-20">
          <Title level={3}>Phản hồi nhập liệu</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Trong quá trình thao tác, các quy tắc và biểu mẫu xác thực khác
                nhau có thể được sử dụng để cho phép người dùng tìm và sửa lỗi
                kịp thời.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_INPUT_ERROR}>
                {demo.input ? (
                  <Form>
                    <Form.Item
                      name="content"
                      rules={[
                        { min: 10, message: "Nhập tối thiểu 10 ký tự" },
                        { required: true, message: "Vui lòng nhập nội dung" },
                      ]}
                      hasFeedback
                    >
                      <Input placeholder="Nhập nội dung" />
                    </Form.Item>
                  </Form>
                ) : null}
                <Button
                  type="primary"
                  className="mt-16"
                  onClick={() => handleToggle("input")}
                >
                  Demo
                </Button>
              </PreviewImage>
            </Col>
          </Row>
          <div id="popconfirm" className="mb-20">
            <Title level={4}>Bong bóng xác nhận (Popconfirm)</Title>
            <Row gutter={gutter}>
              <Col span={14}>
                <Paragraph>
                  Khi một đối tượng cần yêu cầu xác nhận thêm từ người dùng, sẽ
                  có thông báo nhỏ hiện lên để hỏi người dùng.
                </Paragraph>
              </Col>
              <Col span={10}>
                <PreviewImage src={FEEDBACK_POPCONFIRM}>
                  {demo.popconfirm ? <PopconfirmDemo /> : null}
                  <Button
                    type="primary"
                    onClick={() => handleToggle("popconfirm")}
                  >
                    Demo
                  </Button>
                </PreviewImage>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div id="result-feedback" className="mb-20">
        <Title level={2}>Phản hồi kết quả</Title>
        <Paragraph>
          Dùng càng nhiều càng tốt trong quá trình hoạt động và phản hồi ngay
          lập tức sẽ làm tăng cảm giác tin cậy của người dùng.
        </Paragraph>
        <div id="message" className="mb-20">
          <Title level={3}>Tin nhắn (Message)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Là một thông báo nhắc nhẹ nhưng không làm gián đoạn thao tác của
                người dùng.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_MESSAGE}>
                <Space>
                  <Button
                    onClick={() =>
                      message.success("Đây là thông báo thành công")
                    }
                  >
                    Thành công
                  </Button>
                  <Button
                    onClick={() => message.error("Đây là một thông báo lỗi")}
                  >
                    Lỗi
                  </Button>
                  <Button
                    onClick={() =>
                      message.warning("Đây là một thông báo cảnh báo")
                    }
                  >
                    Cảnh báo
                  </Button>
                </Space>
              </PreviewImage>
            </Col>
            <Col span={14}>
              <Paragraph>
                Do thông báo thời gian trình bày ngắn (mặc định 3s) nên đối với
                các thông báo lỗi quan trọng hơn, nên sử dụng hộp thoại để thông
                báo tránh bỏ sót thông tin.
              </Paragraph>
            </Col>
            <Col span={10}>
              <Row gutter={gutter}>
                <Col span={12}>
                  <PreviewImage src={FEEDBACK_MESSAGE_GOOD} status="good">
                    <Paragraph className="fw-600">
                      Ví dụ đúng
                      <span className="desc">
                        Các thông báo lỗi quan trọng đề xuất sử dụng hộp thoại
                        phản hồi và cho biết lý do lỗi.
                      </span>
                    </Paragraph>
                  </PreviewImage>
                </Col>
                <Col span={12}>
                  <PreviewImage src={FEEDBACK_MESSAGE_BAD} status="bad">
                    <Paragraph className="fw-600">
                      Ví dụ sai
                      <span className="desc">
                        Lời nhắc nhẹ không được khuyến nghị cho các thông báo
                        lỗi quan trọng.
                      </span>
                    </Paragraph>
                  </PreviewImage>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div id="dialog-feedback" className="mb-20">
          <Title level={3}>Hộp thoại phản hồi</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Nội dung phản hồi có thể được đóng bằng nút xác nhận hoặc hủy.
                Người dùng không thể thực hiện bất kỳ thao tác nào khi hộp thoại
                xuất hiện.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={FEEDBACK_DIALOG}>
                <Button
                  type="primary"
                  onClick={() =>
                    Modal.error({
                      title: "Lỗi",
                      content: "Chi tiết cụ thể của lỗi",
                      okText: "Đã hiểu",
                    })
                  }
                >
                  Demo
                </Button>
              </PreviewImage>
            </Col>
          </Row>
        </div>
      </div>
    </ContentDetail>
  );
}
