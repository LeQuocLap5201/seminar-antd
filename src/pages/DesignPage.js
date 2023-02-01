import ContentLayout from "containers/ContentLayout";
import { Link } from "react-router-dom";

export default function DesignPage() {
  const menu = [
    {
      label: "Ant Design",
      key: "ant-design",
      children: [
        {
          label: <Link to="/spec/introduce">Giới thiệu</Link>,
          key: "introduce",
        },
        {
          label: <Link to="/spec/values">Giá trị thiết kế</Link>,
          key: "values",
        },
      ],
    },
    {
      label: "Phong cách toàn cục",
      key: "global-styles",
      children: [
        {
          label: <Link to="/spec/colors">Màu sắc</Link>,
          key: "colors",
        },
        {
          label: <Link to="/spec/layout">Bố cục</Link>,
          key: "layout",
        },
        {
          label: <Link to="/spec/font">Phông chữ</Link>,
          key: "font",
        },
        {
          label: <Link to="/spec/icon">Biểu tượng</Link>,
          key: "icon",
        },
        {
          label: <Link to="/spec/dark">Chế độ tối</Link>,
          key: "dark",
        },
      ],
    },
    {
      label: "Mẫu thiết kế",
      key: "design-patterns",
      children: [
        { label: <Link to="/spec/overview">Tổng quan</Link>, key: "overview" },
        {
          label: "Quy tắc",
          key: "global-rules",
          children: [
            {
              label: <Link to="/spec/feedback">Phản hồi</Link>,
              key: "feedback",
            },
            {
              label: <Link to="/spec/navigation">Điều hướng</Link>,
              key: "navigation",
            },
            {
              label: <Link to="/spec/data-entry">Nhập dữ liệu</Link>,
              key: "data-entry",
            },
            {
              label: <Link to="/spec/data-display">Hiển thị dữ liệu</Link>,
              key: "data-display",
            },
            {
              label: <Link to="/spec/copywriting">Viết quảng cáo</Link>,
              key: "copywriting",
            },
            {
              label: <Link to="/spec/data-format">Định dạng dữ liệu</Link>,
              key: "data-format",
            },
            {
              label: <Link to="/spec/buttons">Nút</Link>,
              key: "buttons",
            },
          ],
        },
        {
          label: "Tài liệu mẫu",
          key: "template-document",
          children: [
            {
              label: (
                <Link to="/spec/visualization-page">
                  Trang minh họa dữ liệu
                </Link>
              ),
              key: "visualization-page",
            },
            {
              label: <Link to="/spec/detail-page">Trang chi tiết</Link>,
              key: "detail-page",
            },
          ],
        },
        {
          label: "Nguyên tắc",
          key: "principles",
          children: [
            {
              label: <Link to="/spec/proximity">Gần gũi</Link>,
              key: "proximity",
            },
            {
              label: <Link to="/spec/alignment">Căn chỉnh</Link>,
              key: "alignment",
            },
            {
              label: <Link to="/spec/contrast">Tương phản</Link>,
              key: "contrast",
            },
            {
              label: <Link to="/spec/repetition">Tái sử dụng</Link>,
              key: "repetition",
            },
            {
              label: <Link to="/spec/direct">Theo tác trực tiếp</Link>,
              key: "direct",
            },
            {
              label: <Link to="/spec/stay">Ngay trên trang</Link>,
              key: "stay",
            },
            {
              label: <Link to="/spec/lightweight">Đơn giản hóa tương tác</Link>,
              key: "lightweight",
            },
            {
              label: <Link to="/spec/invitation">Cung cấp lời mời</Link>,
              key: "invitation",
            },
            {
              label: <Link to="/spec/transition">Chuyển tiếp thông minh</Link>,
              key: "transition",
            },
            {
              label: <Link to="/spec/reaction">Phản ứng tức thời</Link>,
              key: "reaction",
            },
          ],
        },
      ],
    },
    { label: <Link to="/spec/visual">Minh họa</Link>, key: "visual" },
    { label: <Link to="/spec/motion">Chuyển động</Link>, key: "motion" },
    { label: <Link to="/spec/illustration">Đồ họa</Link>, key: "illustration" },
  ];

  const openKeys = [
    "ant-design",
    "global-styles",
    "design-patterns",
    "global-rules",
    "template-document",
    "principles",
  ];

  return <ContentLayout menu={menu} openKeys={openKeys} />;
}
