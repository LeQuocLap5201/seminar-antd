import { Typography } from "antd";
import { ContentDetail } from "components";
import { DESIGN_INTRODUCTION } from "img";

const { Title, Paragraph } = Typography;

export default function Introduction() {
  const anchorList = [
    {
      key: "guidelines-and-resources",
      href: "#guidelines-and-resources",
      title: "Nguyên tắc và Tài nguyên",
    },
    {
      key: "whos-using-ant-design",
      href: "#whos-using-ant-design",
      title: "Ai đang sử dụng Ant Design",
    },
  ];

  const resourceList = [
    {
      name: "Tài nguyên thiết kế",
      key: "design-resources",
      link: "https://ant.design/docs/resources",
    },
    {
      name: "Bộ công cụ Sketch",
      key: "sketch-toolbox",
      link: "http://kitchen.alipay.com/",
    },
  ];

  const userList = [
    {
      name: "Ant Financial",
      key: "ant-financial",
      link: "http://www.antgroup.com/index.htm?locale=en_US",
    },
    {
      name: "Alibaba",
      key: "alibaba",
      link: "http://www.alibaba.com/",
    },
    {
      name: "Tencent",
      key: "tencent",
      link: "http://www.tencent.com/",
    },
    {
      name: "Baidu",
      key: "baidu",
      link: "http://www.baidu.com/",
    },
    {
      name: "Koubei",
      key: "koubei",
      link: "http://www.koubei.com/",
    },
    {
      name: "Meituan",
      key: "meituan",
      link: "http://www.xiaojukeji.com/",
    },
    {
      name: "Didi",
      key: "didi",
      link: "http://www.xiaojukeji.com/",
    },
    {
      name: "Eleme",
      key: "eleme",
      link: "https://www.ele.me/",
    },
    {
      name: "Người dùng khác",
      key: "other-users",
      link: "https://github.com/ant-design/ant-design/issues/477",
    },
  ];

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Giới thiệu</Title>
      <img className="with-margin" src={DESIGN_INTRODUCTION} alt="" />
      <Paragraph>
        Trong quá trình phát triển các ứng dụng, có nhiều thông số thiết kế và
        hệ thống xử lý khác nhau và phức tạp, điều này gây khó khăn cho các nhà
        thiết kế và lập trình viên, đồng thời sẽ làm giảm hiệu quả cho việc phát
        triển ứng dụng.
      </Paragraph>
      <Paragraph>
        Trước tình hình đó, đội ngũ thiết kế của{" "}
        <span className="fw-600">
          Ant Financial (Ant User-Experience Design)
        </span>{" "}
        đã xây dựng hệ thống thiết kế giao diện cho ứng dụng, nhằm mục đích nhất
        quán các thông số giao diện người dùng, giúp các nhà thiết kế tập trung
        vào trải nghiệm người dùng tốt hơn.
      </Paragraph>
      <div id="guidelines-and-resources">
        <Title level={2}>Nguyên tắc và Tài nguyên</Title>
        <Paragraph>
          Chúng tôi cung cấp các hướng dẫn thiết kế toàn diện, các phương pháp
          hay nhất, tài nguyên và công cụ để giúp các nhà thiết kế tạo ra các
          nguyên mẫu sản phẩm chất lượng cao.
        </Paragraph>
        <Paragraph>
          <ul>
            {resourceList.map((item) => (
              <li key={item.key}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </Paragraph>
      </div>
      <div id="whos-using-ant-design">
        <Title level={2}>Ai đang sử dụng Ant Design</Title>
        <Paragraph>
          <ul>
            {userList.map((user) => (
              <li key={user.key}>
                <a href={user.link} target="_blank" rel="noopener noreferrer">
                  {user.name}
                </a>
              </li>
            ))}
          </ul>
        </Paragraph>
      </div>
    </ContentDetail>
  );
}
