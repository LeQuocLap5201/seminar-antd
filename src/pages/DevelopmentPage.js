import ContentLayout from "containers/ContentLayout";
import { Link } from "react-router-dom";

export default function DevelopmentPage() {
  const menu = [
    {
      label: <Link to="/react/introduce">Ant Design + React</Link>,
      key: "introduce",
    },
    {
      label: <Link to="/react/getting-started">Bắt đầu</Link>,
      key: "getting-started",
    },
    {
      label: (
        <Link to="/react/use-with-create-react-app">
          Sử dụng create-react-app
        </Link>
      ),
      key: "use-with-create-react-app",
    },
    {
      label: (
        <Link to="/react/use-in-typescript">Sử dụng trong TypeScript</Link>
      ),
      key: "use-in-typescript",
    },
    {
      label: <Link to="/react/compatible-style">Tương thích CSS</Link>,
      key: "compatible-style",
    },
    {
      label: <Link to="/react/customize-theme">Tùy chỉnh chủ đề</Link>,
      key: "customize-theme",
    },
    {
      label: (
        <Link to="/react/use-custom-date-library">
          Sử dụng thư viện tùy chỉnh ngày
        </Link>
      ),
      key: "use-custom-date-library",
    },
    {
      label: <Link to="/react/migration-v5">V4 đến V5</Link>,
      key: "migration-v5",
    },
    {
      label: <Link to="/react/i18n">Quốc tế hóa</Link>,
      key: "i18n",
    },
  ];

  return <ContentLayout menu={menu} />;
}
