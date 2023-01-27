import { Typography } from "antd";
import { ContentDetail } from "components";
import { OVERVIEW_ETC } from "img";

const { Title, Paragraph } = Typography;

export default function Overview() {
  const anchorList = [
    {
      key: "framework-information",
      href: "#framework-information",
      title: "Khuôn mẫu",
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Tổng quan</Title>
      <Paragraph>
        Sử dụng các mẫu thiết kế giúp tiết kiệm thời gian thiết kế, duy trì tính
        nhất quán của hệ thống và cho phép các nhà thiết kế tập trung vào nơi
        cần sự sáng tạo nhất.
      </Paragraph>
      <Paragraph>
        Các mẫu thiết kế tuân theo các giá trị thiết kế của Ant Design và cung
        cấp các giải pháp chung cho các vấn đề thiết kế. Nhà thiết kế có thể
        trực tiếp sử dụng các mẫu thiết kế để hoàn thành việc thiết kế giao diện
        hoặc sử dụng các mẫu thiết kế làm điểm bắt đầu để đưa ra các giải pháp
        dành riêng cho doanh nghiệp hơn nhằm đáp ứng các yêu cầu thiết kế riêng
        lẻ.
      </Paragraph>
      <div id="framework-information" className="mb-20">
        <Title level={2}>Khuôn mẫu</Title>
        <img className="with-margin shadow" src={OVERVIEW_ETC} alt="" />
        <Paragraph>
          Mẫu thiết kế hoàn chỉnh sẽ bao gồm các ví dụ về mẫu, thành phần (ETC)
          và các khái niệm mục đích chung:
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              <span className="fw-600">Ví dụ về chức năng</span>: Gồm nhiều mẫu
              để truyền cảm hứng cho người dùng cách sử dụng và xây dựng một
              tính năng chung.
            </li>
            <li>
              <span className="fw-600">Bản mẫu</span>: Ví dụ cấp độ trang, giúp
              truyền cảm hứng cho người dùng cách xây dựng một trang điển hình
              trong hệ thống, chẳng hạn như trang chi tiết.
            </li>
            <li>
              <span className="fw-600">Thành phần</span>
              <ul>
                <li>
                  Các thành phần cơ bản: Các thành phần cơ bản nhất của hệ
                  thống, chẳng hạn như các nút,...
                </li>
                <li>
                  Các thành phần/mô-đun nghiệp vụ: Các ví dụ cấp khối, thường
                  bao gồm nhiều thành phần, chẳng hạn như tiêu đề chung của
                  PageHeader.
                </li>
              </ul>
            </li>
            <li>
              <span className="fw-600">Các khái niệm chung</span>: Một số quy
              ước đảm bảo hệ thống hóa ETC, chẳng hạn như phông chữ, viết quảng
              cáo,...
            </li>
          </ul>
        </Paragraph>
      </div>
    </ContentDetail>
  );
}
