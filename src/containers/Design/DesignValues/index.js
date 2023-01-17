import { Typography } from "antd";
import { ContentDetail } from "components";
import { CERTAIN, DESIGN_VALUES, GROWING, MEANINGFUL, NATURAL } from "img";

const { Title, Paragraph } = Typography;

export default function DesignValues() {
  const anchorList = [
    {
      key: "natural",
      href: "#natural",
      title: "Tự nhiên",
    },
    {
      key: "certain",
      href: "#certain",
      title: "Chắc chắn",
    },
    {
      key: "meaningful",
      href: "#meaningful",
      title: "Ý nghĩa",
    },
    {
      key: "growing",
      href: "#growing",
      title: "Phát triển",
    },
  ];
  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Giá trị thiết kế</Title>
      <Paragraph>
        Các giá trị thiết kế của Ant Design cung cấp cho các nhà thiết kế các
        tiêu chuẩn để đánh giá, truyền cảm hứng cho các nguyên tắc thiết kế và
        mẫu thiết kế, sau đó đưa ra hướng dẫn và giải pháp chung cho các vấn đề
        thiết kế cụ thể.
      </Paragraph>
      <img src={DESIGN_VALUES} alt="" className="with-margin" />
      <Paragraph>Dưới đây là bốn giá trị thiết kế của Ant Design:</Paragraph>
      <div id="natural">
        <Title level={2}>Tự nhiên</Title>
        <img src={NATURAL} alt="" className="with-margin" />
        <Paragraph>Nhận thức tự nhiên của người dùng.</Paragraph>
        <Paragraph>Hành vi tự nhiên của người dùng.</Paragraph>
      </div>
      <div id="certain">
        <Title level={2}>Chắc chắn</Title>
        <img src={CERTAIN} alt="" className="with-margin" />
        <Paragraph>
          Giao diện là phương tiện tương tác giữa người dùng và hệ thống. Giao
          diện có độ hoàn thiện cao thì sẽ dễ mang lại sự tin tưởng cho người
          dùng.
        </Paragraph>
      </div>
      <div id="meaningful">
        <Title level={2}>Ý nghĩa</Title>
        <img src={MEANINGFUL} alt="" className="with-margin" />
        <Paragraph>
          Một sản phẩm hoặc chức năng được nhà thiết kế tạo ra không phải vì nhu
          cầu của nhà thiết kế mà dùng để thực hiện yêu cầu của người dùng.
          Thiết kế sản phẩm nên lấy người dùng làm trung tâm để hoàn thành yêu
          cầu của người dùng. Từ nhu cầu của người dùng mà tạo ra sự tương tác
          giữa người dùng và sản phẩm, có ý nghĩa cho quá trình làm việc.
        </Paragraph>
      </div>
      <div id="growing">
        <Title level={2}>Phát triển</Title>
        <img src={GROWING} alt="" className="with-margin" />
        <Paragraph>
          Sự phát triển của sản phẩm luôn đi kèm với sự phát triển của người
          dùng.Các nhà thiết kế/lập trình viên nên trách nhiệm về sản phẩm mà
          mình làm ra và luôn cải thiện chúng.
        </Paragraph>
      </div>
    </ContentDetail>
  );
}
