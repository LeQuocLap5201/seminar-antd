import { Col, Divider, Row, Typography } from "antd";
import { REFERENCE_LINK } from "common/links";
import { ContentDetail, PreviewImage } from "components";
import {
  BUSINESS_ICONS,
  CIRCULAR_CONTOUR,
  CORNERS_BAD,
  CORNERS_GOOD,
  HORIZONTAL_RECTANGLE_CONTOUR,
  ICON_COLOR,
  ICON_COLOR_1,
  ICON_SIZING,
  ICON_SIZING_1,
  KEY_CONTOUR_LINES,
  NAMING_CONVENTIONS,
  PERSPECTIVE_BAD,
  PERSPECTIVE_GOOD,
  SQUARE_CONTOUR,
  STROKE_WEIGHT_BAD,
  STROKE_WEIGHT_GOOD,
  SYSTEM_ICONS,
  VERTICAL_RECTANGLE_CONTOUR,
  VISUAL_CORRECTION_BAD,
  VISUAL_CORRECTION_GOOD,
} from "img";

const { Title, Paragraph } = Typography;
const gutter = [16, 16];

export default function Icons() {
  const anchorList = [
    {
      key: "system-icons",
      href: "#system-icons",
      title: "Biểu tượng hệ thống",
      children: [
        {
          key: "key-contour-lines",
          href: "#key-contour-lines",
          title: "Đường viền chính",
        },
        {
          key: "stroke-weight",
          href: "#stroke-weight",
          title: "Độ dày",
        },
        {
          key: "corners",
          href: "#corners",
          title: "Góc",
        },
        {
          key: "visual-correction",
          href: "#visual-correction",
          title: "Điều chỉnh hiển thị",
        },
        {
          key: "perspective",
          href: "#perspective",
          title: "Luật xa gần",
        },
        {
          key: "naming-conventions",
          href: "#naming-conventions",
          title: "Quy ước đặt tên",
        },
        {
          key: "icon-sizing",
          href: "#icon-sizing",
          title: "Kích thước",
        },
        {
          key: "color",
          href: "#color",
          title: "Màu sắc",
        },
      ],
    },
    {
      key: "#business-icons",
      href: "#business-icons",
      title: "Biểu tượng kinh doanh",
      children: [
        {
          key: "icon-sizing-1",
          href: "#icon-sizing-1",
          title: "Kích thước",
        },
        {
          key: "color-1",
          href: "#color-1",
          title: "Màu sắc",
        },
      ],
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Biểu tượng</Title>
      <Paragraph>
        Các biểu tượng của Ant Design tuân thủ hai nguyên tắc sau:
      </Paragraph>
      <Paragraph>
        <ul>
          <li>Rõ ràng, trực quan, có mức độ nhận diện cao và dễ hiểu.</li>
          <li>
            Tất cả các biểu tượng trong giao diện người dùng phải nhất quán về
            phong cách (thiết kế chi tiết, phối cảnh, độ đậm nhạt,...)
          </li>
        </ul>
      </Paragraph>
      <div id="system-icons" className="mb-20">
        <Title level={2}>Biểu tượng hệ thống</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Biểu tượng hệ thống thường được sử dụng để thể hiện các thao tác
              thường được sử dụng như: lưu, sửa, xóa,...Ant Design cũng có các
              biểu tượng để biểu thị các loại tệp và trạng thái.
            </Paragraph>
            <Paragraph>
              <ul>
                <li>
                  <a
                    href={REFERENCE_LINK.icons}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Xem các biểu tượng
                  </a>
                </li>
              </ul>
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={SYSTEM_ICONS}>
              <Paragraph>Biểu tượng hệ thống</Paragraph>
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <div id="key-contour-lines" className="mb-20">
        <Title level={3}>Đường viền chính</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Các đường viền đóng vai trò quan trọng trong việc tạo ra các biểu
              tượng khác nhau với cùng một hiệu ứng hình ảnh.
            </Paragraph>
            <Paragraph>
              Vui lòng đặt tất cả các biểu tượng ở độ phân giải 1024×1024 (16×16
              64 lần).
            </Paragraph>
            <Paragraph>
              <ul>
                <li>
                  <a
                    href={REFERENCE_LINK.illustratorTips}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mẹo
                  </a>
                </li>
              </ul>
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage className="mb-20" src={KEY_CONTOUR_LINES}>
              <Paragraph>Lưới Ant Design và các đường viền chính</Paragraph>
            </PreviewImage>
            <PreviewImage className="mb-20" src={SQUARE_CONTOUR}>
              <Paragraph>Đường viền vuông</Paragraph>
            </PreviewImage>
            <PreviewImage className="mb-20" src={HORIZONTAL_RECTANGLE_CONTOUR}>
              <Paragraph>Đường viền hình chữ nhật nằm ngang</Paragraph>
            </PreviewImage>
            <PreviewImage className="mb-20" src={CIRCULAR_CONTOUR}>
              <Paragraph>Đường viền tròn</Paragraph>
            </PreviewImage>
            <PreviewImage className="mb-20" src={VERTICAL_RECTANGLE_CONTOUR}>
              <Paragraph>Đường viền hình chữ nhật dọc</Paragraph>
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <div id="stroke-weight" className="mb-20">
        <Title level={3}>Độ dày</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Các biểu tượng của Ant Design có chiều rộng nhất quán là 72px.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={STROKE_WEIGHT_GOOD} status="good">
                  <Paragraph className="fw-600">
                    Ví dụ đúng
                    <span className="desc">
                      Độ dày của đường viền luôn là 72px
                    </span>
                  </Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={STROKE_WEIGHT_BAD} status="bad">
                  <Paragraph className="fw-600">
                    Ví dụ sai
                    <span className="desc">
                      Độ dày đường viền không đồng đều
                    </span>
                  </Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="corners" className="mb-20">
        <Title level={3}>Góc</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Các biểu tượng theo Ant Design phải có các góc và cạnh được làm
              tròn bằng bán kính 72px.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={CORNERS_GOOD} status="good">
                  <Paragraph className="fw-600">
                    Ví dụ đúng
                    <span className="desc">
                      Các góc của biểu tượng được làm tròn
                    </span>
                  </Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={CORNERS_BAD} status="bad">
                  <Paragraph className="fw-600">
                    Ví dụ sai
                    <span className="desc">
                      Các góc của biểu tượng không được làm tròn
                    </span>
                  </Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="visual-correction" className="mb-20">
        <Title level={3}>Điều chỉnh hiển thị</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Trong một số trường hợp đặc biệt nhất định (ví dụ: khi biểu tượng
              quá nhỏ gọn), có thể thực hiện các điều chỉnh về độ rộng dòng,
              đường viền hoặc các thay đổi nhỏ khác để tăng khả năng đọc.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={VISUAL_CORRECTION_GOOD} status="good">
                  <Paragraph className="fw-600">
                    Ví dụ đúng
                    <span className="desc">
                      Đối với chữ “JPG”, một đường viền được thêm vào để dễ đọc
                    </span>
                  </Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={VISUAL_CORRECTION_BAD} status="bad">
                  <Paragraph className="fw-600">
                    Ví dụ sai
                    <span className="desc">
                      Văn bản trong biểu tượng chật chội và khó đọc
                    </span>
                  </Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="perspective" className="mb-20">
        <Title level={3}>Luật xa gần</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Luôn giữ phong cách đơn giản, phẳng phiu. Các biểu tượng không nên
              có chiều sâu cũng như số lượng lớn chi tiết.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={PERSPECTIVE_GOOD} status="good">
                  <Paragraph className="fw-600">
                    Ví dụ đúng
                    <span className="desc">
                      Duy trì một phong cách phẳng, đơn giản
                    </span>
                  </Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={PERSPECTIVE_BAD} status="bad">
                  <Paragraph className="fw-600">
                    Ví dụ sai
                    <span className="desc">
                      Các biểu tượng không nên có chiều sâu
                    </span>
                  </Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="naming-conventions" className="mb-20">
        <Title level={3}>Quy ước đặt tên</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Các quy ước đặt tên thống nhất giúp việc tìm kiếm các biểu tượng
              nhanh hơn và dễ dàng hơn. Ví dụ: các biểu tượng có đường viền xung
              quanh có hậu tố "-o".
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={NAMING_CONVENTIONS} />
          </Col>
        </Row>
      </div>
      <div id="icon-sizing" className="mb-20">
        <Title level={3}>Kích thước</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Các biểu tượng phải được chia tỷ lệ theo kích thước văn bản, theo
              thông số kỹ thuật của Ant Design.
            </Paragraph>
            <Paragraph>
              Ví dụ: các biểu tượng cùng dòng với phông chữ 12pt phải có kích
              thước 12px với khoảng cách 8px.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={ICON_SIZING} />
          </Col>
        </Row>
      </div>
      <div id="color" className="mb-20">
        <Title level={3}>Màu sắc</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Màu sắc của biểu tượng phải phù hợp với màu của bản sao xung
              quanh, trừ khi biểu tượng đang được sử dụng để thể hiện trạng thái
              (trong trường hợp đó, nó phải được tô màu tương ứng).
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={ICON_COLOR}>
              <Paragraph className="fw-600">Màu sắc</Paragraph>
              <span className="desc">
                Màu sắc thể hiện - @Black = #000000, @White = #FFFFFF, @Blue-6 =
                #1890FF
              </span>
            </PreviewImage>
          </Col>
        </Row>
      </div>
      <Divider />
      <div id="business-icons" className="mb-20">
        <Title level={2}>Biểu tượng kinh doanh</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Các biểu tượng kinh doanh, không giống như các biểu tượng hệ
              thống, chúng không có các hoạt động chức năng, mà là một sự trừu
              tượng hỗ trợ cho việc viết bài.
            </Paragraph>
            <Paragraph>
              <blockquote>
                Lưu ý: Nguyên tắc thiết kế biểu tượng kinh doanh và biểu tượng
                hệ thống về cơ bản là giống nhau, các chi tiết của quá trình xử
                lý (chẳng hạn như độ dày, kích thước góc,...) có thể tùy thuộc
                vào từng cảnh cụ thể.
              </blockquote>
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={BUSINESS_ICONS} />
          </Col>
        </Row>
      </div>
      <div id="icon-sizing-1" className="mb-20">
        <Title level={3}>Kích thước</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Trong sử dụng bình thường, có ba tùy chọn 32px (kích thước tối
              thiểu), 48px và 64px (kích thước tối đa).
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={ICON_SIZING_1} />
          </Col>
        </Row>
      </div>
      <div id="color-1" className="mb-20">
        <Title level={3}>Màu sắc</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Có hai loại biểu tượng doanh nghiệp, một màu (màu trung tính) và
              hai màu (màu trung tính + màu chính), diện tích của màu chính
              không vượt quá 40% toàn bộ biểu tượng.
            </Paragraph>
          </Col>
          <Col span={10}>
            <PreviewImage src={ICON_COLOR_1} />
          </Col>
        </Row>
      </div>
    </ContentDetail>
  );
}
