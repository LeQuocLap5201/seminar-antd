import { Typography } from "antd";
import { ContentDetail } from "components";

const { Title, Paragraph } = Typography;

export default function Feedback() {
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

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Phản hồi</Title>
    </ContentDetail>
  );
}
