import { Col, Divider, Row, Typography } from "antd";
import { REFERENCE_LINK } from "common/links";
import { ContentDetail, PreviewImage } from "components";
import {
  COPY_ARTICULATE_BAD,
  COPY_ARTICULATE_GOOD,
  COPY_BRING_BAD,
  COPY_BRING_GOOD,
  COPY_CONCISE_BAD,
  COPY_CONCISE_GOOD,
  COPY_CONSISTENTLY_BAD,
  COPY_CONSISTENTLY_EX,
  COPY_CONSISTENTLY_GOOD,
  COPY_EXPRESS_1_BAD,
  COPY_EXPRESS_1_GOOD,
  COPY_EXPRESS_2_BAD,
  COPY_EXPRESS_2_GOOD,
  COPY_EXTREME_BAD,
  COPY_EXTREME_GOOD,
  COPY_FRIENDLY_BAD,
  COPY_FRIENDLY_GOOD,
  COPY_MARKS_BAD,
  COPY_MARKS_GOOD,
  COPY_NUMBERS_BAD,
  COPY_NUMBERS_GOOD,
  COPY_OMIT_BAD,
  COPY_OMIT_GOOD,
  COPY_OMIT_TOOLTIP_BAD,
  COPY_OMIT_TOOLTIP_GOOD,
  COPY_PLACE_BAD,
  COPY_PLACE_GOOD,
  COPY_PRECISELY_1_BAD,
  COPY_PRECISELY_1_GOOD,
  COPY_PRECISELY_2_BAD,
  COPY_PRECISELY_2_GOOD,
  COPY_UP_LOW_1_BAD,
  COPY_UP_LOW_1_GOOD,
  COPY_UP_LOW_2_BAD,
  COPY_UP_LOW_2_GOOD,
  COPY_UP_LOW_3_BAD,
  COPY_UP_LOW_3_GOOD,
  COPY_WORDS_BAD,
  COPY_WORDS_GOOD,
} from "img";

const { Title, Paragraph } = Typography;
const gutter = [16, 16];

export default function Copywriting() {
  const anchorList = [
    {
      key: "language",
      href: "#language",
      title: "Ngôn ngữ",
      children: [
        {
          key: "articulate-foothold",
          href: "#articulate-foothold",
          title: "Nêu rõ quan điểm",
        },
        {
          key: "concise-statement",
          href: "#concise-statement",
          title: "Cô đọng",
        },
        {
          key: "use-words-familiar-to-the-user",
          href: "#use-words-familiar-to-the-user",
          title: "Sử dụng các từ quen thuộc với người dùng",
        },
        {
          key: "express-consistently",
          href: "#express-consistently",
          title: "Thể hiện nhất quán",
        },
        {
          key: "place-important-information-in-a-prominent-position",
          href: "#place-important-information-in-a-prominent-position",
          title: "Đặt thông tin quan trọng ở vị trí nổi bật",
        },
        {
          key: "express-completely-and-directly",
          href: "#express-completely-and-directly",
          title: "Trình bày thông tin đầy đủ và trực tiếp",
        },
        {
          key: "use-words-precisely-and-completely",
          href: "#use-words-precisely-and-completely",
          title: "Sử dụng từ chính xác và đầy đủ",
        },
      ],
    },
    {
      key: "tone",
      href: "#tone",
      title: "Giọng điệu",
      children: [
        {
          key: "bring-each-other-closer",
          href: "#bring-each-other-closer",
          title: "Gần gũi",
        },
        {
          key: "be-friendly-and-respectful",
          href: "#be-friendly-and-respectful",
          title: "Thân thiện và tôn trọng",
        },
        {
          key: "do-not-be-too-extreme",
          href: "#do-not-be-too-extreme",
          title: "Đừng quá cực đoan",
        },
      ],
    },
    {
      key: "capitalization-and-punctuation",
      href: "#capitalization-and-punctuation",
      title: "Viết hoa và chấm câu",
      children: [
        {
          key: "uppercase-and-lowercase",
          href: "#uppercase-and-lowercase",
          title: "Chữ hoa và chữ thường",
        },
        {
          key: "arabic-numbers",
          href: "#arabic-numbers",
          title: "Số thay chữ",
        },
        {
          key: "omit-unnecessary-punctuation",
          href: "#omit-unnecessary-punctuation",
          title: "Bỏ qua dấu câu không cần thiết",
        },
        {
          key: "use-exclamation-marks-with-caution",
          href: "#use-exclamation-marks-with-caution",
          title: "Sử dụng dấu chấm thận một cách thận trọng",
        },
      ],
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Viết quảng cáo</Title>
      <Paragraph>
        Từ ngữ chính xác và rõ ràng dễ hiểu phù hợp để tạo cảm giác tin cậy. Vì
        vậy, trong thiết kế giao diện, viết quảng cáo cần được coi trọng. Có một
        số điểm cần lưu ý sau:
      </Paragraph>
      <Paragraph>
        <ul>
          <li>Xem xét từ quan điểm của người dùng.</li>
          <li>Thể hiện nhất quán.</li>
          <li>Đặt thông tin quan trọng ở các vị trí nổi bật.</li>
          <li>Chuyên nghiệp, chính xác và đầy đủ.</li>
          <li>Ngắn gọn, thân thiện và tích cực.</li>
        </ul>
      </Paragraph>
      <Paragraph>
        <blockquote>
          <Paragraph>
            Viết quảng cáo (Copywriting) là nghệ thuật của sự thuyết phục và thu
            hút khách hàng bằng ngôn từ, lôi kéo khách hàng đi tới quyết định
            mua sản phẩm hay dịch vụ thông qua sự truyền tải thông điệp và lời
            kêu gọi hành động.
          </Paragraph>
          <Paragraph>
            Xem thêm{" "}
            <a
              href={REFERENCE_LINK.copywriting}
              target="_blank"
              rel="noopener noreferrer"
            >
              tại đây
            </a>
          </Paragraph>
        </blockquote>
      </Paragraph>
      <Divider />
      <div id="language" className="mb-20">
        <Title level={2}>Ngôn ngữ</Title>
        <Paragraph>
          Trong giao diện, viết quảng cáo là cơ sở giao tiếp với người dùng. Vì
          vậy, việc diễn đạt các từ cần được cân nhắc và thiết kế cẩn thận.
        </Paragraph>
      </div>
      <div id="articulate-foothold" className="mb-20">
        <Title level={3}>Nêu rõ quan điểm</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Khi thể hiện nội dung nên tập trung vào người dùng và họ có thể
              làm gì với sản phẩm của bạn chứ không phải bạn và sản phẩm của bạn
              đang làm gì cho họ. Vì nó lấy người dùng làm trung tâm, nên viết
              quảng cáo nên được viết với người dùng là chủ thể càng nhiều càng
              tốt.
            </Paragraph>
            <Paragraph>
              <blockquote>
                Lưu ý: Sử dụng "chúng tôi" để giao tiếp với người dùng khi họ
                báo cáo các câu hỏi, đề xuất hoặc khiếu nại cho hệ thống, chẳng
                hạn như "Chúng tôi sẽ xem xét khiếu nại của bạn".
              </blockquote>
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_ARTICULATE_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_ARTICULATE_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    Tập trung vào những gì "chúng tôi" cung cấp cho người dùng,
                    thay vì tập trung vào quan điểm của người dùng.
                  </span>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="concise-statement" className="mb-20">
        <Title level={3}>Cô đọng</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Bỏ qua những từ vô ích và lặp đi lặp lại mà người dùng đã biết. Cố
              gắng cung cấp nội dung ngắn gọn và dễ tiếp cận.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_CONCISE_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_CONCISE_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="use-words-familiar-to-the-user" className="mb-20">
        <Title level={3}>Sử dụng các từ quen thuộc với người dùng</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Sử dụng các từ đơn giản, minh bạch và dễ hiểu.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_WORDS_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_WORDS_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    Đứng từ quan điểm của người dùng và nói những gì người dùng
                    quen thuộc.
                  </span>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="express-consistently" className="mb-20">
        <Title level={3}>Thể hiện nhất quán</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              <ul>
                <li>Từ vựng để mô tả cùng một sự vật nên được thống nhất.</li>
                <li>
                  Ngữ pháp, ngôn ngữ và trật tự từ nhất quán trong ngữ cảnh.
                </li>
                <li>Tên hoạt động nhất quán và tiêu đề trang.</li>
              </ul>
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_CONSISTENTLY_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                  <span className="desc">
                    Trên cùng một trang và trong cùng một khu vực, trật tự từ
                    nhất quán.
                  </span>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_CONSISTENTLY_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    Trật tự từ không nhất quán sẽ khiến người dùng mất nhiều
                    công sức hơn để hiểu.
                  </span>
                </PreviewImage>
              </Col>
              <Col span={24}>
                <PreviewImage src={COPY_CONSISTENTLY_EX}>
                  <Paragraph className="fw-600">
                    Tên thao tác và tiêu đề trang phải giống nhau.
                  </Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div
        id="place-important-information-in-a-prominent-position"
        className="mb-20"
      >
        <Title level={3}>Đặt thông tin quan trọng ở vị trí nổi bật</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Cho phép người dùng nhìn thấy nội dung quan trọng nhất ngay từ cái
              nhìn đầu tiên.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_PLACE_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                  <span className="desc">
                    Đặt thông tin quan trọng lên đầu trong một không gian hạn
                    chế (hoặc làm nổi bật thông tin quan trọng bằng cách bôi
                    đen, để trống,...).
                  </span>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_PLACE_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    Thông tin mà người dùng quan tâm nhất được ẩn trong các đoạn
                    văn, không dễ tìm kiếm.
                  </span>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="express-completely-and-directly" className="mb-20">
        <Title level={3}>Trình bày thông tin đầy đủ và trực tiếp</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Khi muốn người dùng thực hiện một thao tác, chúng ta nên tập trung
              vào những gì người dùng có thể nhận được và cảm giác của họ. Nói
              cho người dùng biết mục đích của thao tác, khiến họ sẵn sàng thực
              hiện thao tác đó hơn.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_EXPRESS_1_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                  <span className="desc">
                    Người dùng có thể tìm hiểu về lợi ích của các cài đặt.
                  </span>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_EXPRESS_1_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    Người dùng không thể hiểu ý nghĩa của các cài đặt.
                  </span>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Paragraph>
              Báo lỗi là một tính năng phổ biến trong giao diện người dùng. Khi
              người dùng nhập sai nội dung, thông báo lỗi của bạn phải phù hợp
              với nhận thức của người dùng và được diễn đạt một cách dễ hiểu.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_EXPRESS_2_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                  <span className="desc">
                    So với “không đạt”, “không thể hoàn thành” là kết quả khách
                    quan hơn và người dùng dễ chấp nhận hơn. Người dùng cần biết
                    phải làm gì tiếp theo trong trường hợp xảy ra sự cố.
                  </span>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_EXPRESS_2_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    Không thông báo "thất bại" một cách lạnh lùng cho người dùng
                    đối với các tình huống bất thường.
                  </span>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="use-words-precisely-and-completely" className="mb-20">
        <Title level={3}>Sử dụng từ chính xác và đầy đủ</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Sử dụng các từ cơ bản chung một cách quy chuẩn. Viết đúng chính
              tả, diễn đạt trọn vẹn. Các thuật ngữ chuyên môn phải chính xác,
              theo tiêu chuẩn ngành, biểu thức của thời gian phải rõ ràng.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_PRECISELY_1_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                  <span className="desc">Diễn đạt đầy đủ.</span>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_PRECISELY_1_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">Không đầy đủ và mơ hồ.</span>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_PRECISELY_2_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                  <span className="desc">
                    Mô tả thời gian là chính xác và đầy đủ.
                  </span>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_PRECISELY_2_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    Mô tả thời gian không phải là “ngày” hay “tháng” cụ thể
                    khiến người dùng bối rối.
                  </span>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="tone" className="mb-20">
        <Title level={2}>Giọng điệu</Title>
        <Paragraph>
          Ngôn ngữ xác định nội dung, trong khi cảm xúc và bầu không khí được
          thể hiện nhiều hơn thông qua giọng điệu và chúng ta có thể sử dụng các
          giọng điệu khác nhau để thể hiện cùng một nội dung cho những người
          dùng khác nhau.
        </Paragraph>
      </div>
      <div id="bring-each-other-closer" className="mb-20">
        <Title level={3}>Gần gũi</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Không đề cập đến người dùng bằng cách sử dụng "của tôi" và "của
              bạn" trong cùng một cụm từ.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_BRING_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_BRING_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="be-friendly-and-respectful" className="mb-20">
        <Title level={3}>Thân thiện và tôn trọng</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Cung cấp cho người dùng sự hỗ trợ và khuyến khích, không phải là
              mệnh lệnh.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_FRIENDLY_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                  <span className="desc">
                    Hướng dẫn người dùng nhập nội dung chính xác.
                  </span>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_FRIENDLY_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    "không được" khiến người dùng có cảm giác bị ra lệnh.
                  </span>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="do-not-be-too-extreme" className="mb-20">
        <Title level={3}>Đừng quá cực đoan</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Đừng sử dụng cách diễn đạt cứng nhắc sẽ khiến người dùng khó chịu.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_EXTREME_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_EXTREME_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                  <span className="desc">
                    "Không bao giờ" là quá tuyệt đối và khiến người dùng cảm
                    thấy khó chịu.
                  </span>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="capitalization-and-punctuation" className="mb-20">
        <Title level={2}>Viết hoa và chấm câu</Title>
      </div>
      <div id="uppercase-and-lowercase" className="mb-20">
        <Title level={3}>Chữ hoa và chữ thường</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Khi sử dụng tên đầy đủ của sản phẩm, hãy viết hoa chữ cái đầu tiên
              của mỗi từ. Viết hoa các chữ viết tắt của tên sản phẩm.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_UP_LOW_1_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_UP_LOW_1_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Paragraph>Sử dụng đúng trường hợp.</Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_UP_LOW_2_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_UP_LOW_2_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Paragraph>
              Sử dụng chữ hoa đầu câu trong tiêu đề, tiêu đề, nhãn, mục menu,
              nút,...
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_UP_LOW_3_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_UP_LOW_3_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="arabic-numbers" className="mb-20">
        <Title level={3}>Số thay chữ</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Người dùng cảm nhận các con số nhanh hơn. Các con số truyền tải
              thông tin hiệu quả hơn các từ.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_NUMBERS_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_NUMBERS_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="omit-unnecessary-punctuation" className="mb-20">
        <Title level={3}>Bỏ qua dấu câu không cần thiết</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Để giúp người dùng quét văn bản hiệu quả hơn, có thể bỏ qua các
              khoảng không cần thiết. Không cần sử dụng dấu chấm câu khi các yếu
              tố sau xuất hiện một mình:
            </Paragraph>
            <Paragraph>
              <ul>
                <li>Tiêu đề</li>
                <li>Văn bản trong thành phần "tooltip"</li>
                <li>Các câu trong bảng(Table) </li>
                <li>...</li>
              </ul>
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_OMIT_TOOLTIP_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_OMIT_TOOLTIP_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Paragraph>
              Các yếu tố sau đây yêu cầu dấu chấm câu khi chúng xuất hiện một
              mình:
            </Paragraph>
            <Paragraph>
              <ul>
                <li>Nhiều câu hoặc nhiều đoạn.</li>
                <li>Bất kỳ câu nào trước một liên kết.</li>
              </ul>
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_OMIT_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_OMIT_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="use-exclamation-marks-with-caution" className="mb-20">
        <Title level={3}>Sử dụng dấu chấm thận một cách thận trọng</Title>
        <Row gutter={gutter}>
          <Col span={14}>
            <Paragraph>
              Dấu chấm than sẽ làm cho giọng điệu có vẻ quá phấn khích và dễ
              khiến bầu không khí trở nên quá căng thẳng.
            </Paragraph>
            <Paragraph>
              <blockquote>
                Lưu ý: Khi bày tỏ lời chào hoặc chúc mừng người dùng, hãy sử
                dụng "!" là hợp lý, chẳng hạn như "Chào mừng cộng đồng!".
              </blockquote>
            </Paragraph>
          </Col>
          <Col span={10}>
            <Row gutter={gutter}>
              <Col span={12}>
                <PreviewImage src={COPY_MARKS_GOOD} status="good">
                  <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                </PreviewImage>
              </Col>
              <Col span={12}>
                <PreviewImage src={COPY_MARKS_BAD} status="bad">
                  <Paragraph className="fw-600">Ví dụ sai</Paragraph>
                </PreviewImage>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </ContentDetail>
  );
}
