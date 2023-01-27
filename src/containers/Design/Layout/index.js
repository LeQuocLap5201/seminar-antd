import { Typography } from "antd";
import { ContentDetail, PreviewImage } from "components";
import {
  LAYOUT_COMMON,
  LAYOUT_COMMON_EXAMPLE,
  LAYOUT_GRID_UNIT,
  LAYOUT_RASTER,
  LAYOUT_RASTER_EXAMPLE,
  LAYOUT_RASTER_EXAMPLE_V2,
  LEFT_RIGHT_LAYOUT,
  TOP_BOTTOM_LAYOUT,
} from "img";
import LayoutExample from "./components/LayoutExample";

const { Title, Paragraph } = Typography;

export default function Layout() {
  const anchorList = [
    {
      key: "unified-design-board-dimension",
      href: "#unified-design-board-dimension",
      title: "Kích thước thiết kế thống nhất",
    },
    {
      key: "adaptation",
      href: "#adaptation",
      title: "Thích ứng",
      children: [
        {
          key: "1-left-right-layout",
          href: "#1-left-right-layout",
          title: "Bố cục Trái-Phải",
        },
        {
          key: "2-top-bottom-layout",
          href: "#2-top-bottom-layout",
          title: "Bố cục Trên-Dưới",
        },
      ],
    },
    {
      key: "grid-unit",
      href: "#grid-unit",
      title: "Đơn vị lưới",
    },
    {
      key: "raster",
      href: "#raster",
      title: "Cấu trúc dạng cột",
    },
    {
      key: "common-scales",
      href: "#common-scales",
      title: "Căn chỉnh chung",
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Bố cục</Title>
      <Paragraph>
        Bố cục là khởi điểm của thiết kế giao diện có hệ thống. Sự khác biệt so
        với thiết kế đồ họa truyền thống là bố cục của giao diện UI phải dựa
        trên quan điểm "linh hoạt và có hệ thống".
      </Paragraph>
      <Paragraph>
        Để xác định bố cục, chúng tôi đề xuất bắt đầu từ 5 khía cạnh sau:
      </Paragraph>
      <Paragraph className="mb-20">
        <ol>
          {anchorList.map((item) => (
            <li key={item.key}>{item.title}</li>
          ))}
        </ol>
      </Paragraph>
      <div id="unified-design-board-dimension" className="mb-20">
        <Title level={2}>Kích thước thiết kế thống nhất</Title>
        <Paragraph>
          Thống nhất kích thước bảng thiết kế trong tổ chức(Thông thường là
          1440)
        </Paragraph>
      </div>
      <div id="adaptation" className="mb-20">
        <Title level={2}>Thích ứng</Title>
        <Paragraph>
          Tùy theo yêu cầu, Bố cục của thiết kế sẽ điều chỉnh khi kích thước màn
          hình thay đổi để thích ứng trên nhiều thiết bị.
        </Paragraph>
        <Paragraph>2 kiểu bố cục điển hình của Ant Design:</Paragraph>
      </div>
      <div id="1-left-right-layout" className="mb-20">
        <Title level={3}>1. Bố cục Trái-Phải</Title>
        <img className="with-margin shadow" src={LEFT_RIGHT_LAYOUT} alt="" />
      </div>
      <div id="2-top-bottom-layout" className="mb-20">
        <Title level={3}>2. Bố cục Trên-Dưới</Title>
        <img className="with-margin shadow" src={TOP_BOTTOM_LAYOUT} alt="" />
      </div>
      <div style={{ marginBottom: 48 }}>
        <LayoutExample showSwitch />
      </div>
      <div id="grid-unit" className="mb-20">
        <Title level={2}>Đơn vị lưới</Title>
        <Paragraph>
          Ant Design sử dụng hệ thống lưới để đạt được trật tự của hệ thống thị
          giác.
        </Paragraph>
        <img className="with-margin shadow" src={LAYOUT_GRID_UNIT} alt="" />
      </div>
      <div id="raster" className="mb-20">
        <Title level={2}>Cấu trúc dạng cột</Title>
        <Paragraph>
          Dựa vào hệ thống lưới, Ant Design sử dụng bố cục 24 cột.
        </Paragraph>
        <img className="with-margin shadow" src={LAYOUT_RASTER} alt="" />
        <img
          className="with-margin shadow"
          src={LAYOUT_RASTER_EXAMPLE}
          alt=""
        />
        <img
          className="with-margin shadow"
          src={LAYOUT_RASTER_EXAMPLE_V2}
          alt=""
        />
        <Paragraph>
          Các nhà thiết kế của Ant Design luôn ghi nhớ 4 điều sau:
        </Paragraph>
        <Paragraph>
          <ol>
            <li>Định nghĩa rõ ràng về khu vực bố cục động</li>
            <li>Cố gắng luôn sử dụng số chẵn</li>
            <li>
              Cung cấp các số quan trọng (Khoảng cách giữa các cột/Rãnh, Cột)
            </li>
            <li>Luôn sử dụng cột bắt đầu và cột kết thúc để xác định khối.</li>
          </ol>
        </Paragraph>
      </div>
      <div id="common-scales" className="mb-20">
        <Title level={2}>Căn chỉnh chung</Title>
        <Paragraph>
          Ant Design đã đề xuất khái niệm về tỷ lệ chung UI và đưa ra một tập
          hợp các số thường dùng trong thiết kế.
        </Paragraph>
        <img className="with-margin shadow" src={LAYOUT_COMMON} alt="" />
        <PreviewImage src={LAYOUT_COMMON_EXAMPLE} />
      </div>
    </ContentDetail>
  );
}
