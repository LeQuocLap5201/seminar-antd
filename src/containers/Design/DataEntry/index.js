import {
  CloudUploadOutlined, InfoCircleOutlined,
  PlusOutlined,
  UploadOutlined
} from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Tooltip,
  Transfer,
  Typography,
  Upload
} from "antd";
import { REFERENCE_LINK } from "common/links";
import { ContentDetail, PreviewImage } from "components";
import {
  DATA_ENTRY_CHECKBOX,
  DATA_ENTRY_DATE_PICKER,
  DATA_ENTRY_DROPDOWN,
  DATA_ENTRY_INPUT,
  DATA_ENTRY_RADIO,
  DATA_ENTRY_SEARCH,
  DATA_ENTRY_SLIDER_1,
  DATA_ENTRY_SLIDER_2,
  DATA_ENTRY_SWITCH,
  DATA_ENTRY_SWITCH_BAD,
  DATA_ENTRY_SWITCH_GOOD,
  DATA_ENTRY_TEXTAREA,
  DATA_ENTRY_TIPS_1,
  DATA_ENTRY_TIPS_2,
  DATA_ENTRY_TIPS_3,
  DATA_ENTRY_TRANSFER,
  DATA_ENTRY_UPLOAD_CLICK,
  DATA_ENTRY_UPLOAD_DRAG,
  DATA_ENTRY_UPLOAD_THUMBNAILS
} from "img";
import { useState } from "react";

const { Title, Paragraph } = Typography;
const gutter = [16, 16];

const options = [
  {
    label: "Ca nhạc",
    value: 1,
  },
  {
    label: "Thể thao",
    value: 2,
  },
  {
    label: "Game",
    value: 3,
  },
];

const dropOptions = [
  ...options,
  { label: "Du lịch", value: 4 },
  { label: "Mua sắm", value: 5 },
];

const marks = {
  0: "0°C",
  26: "26°C",
  37: "37°C",
  100: {
    style: {
      color: "#f50",
    },
    label: <strong>100°C</strong>,
  },
};

const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `Nội dung${i + 1}`,
  description: `Mô tả của nội dung${i + 1}`,
}));

const initialTargetKeys = mockData
  .filter((item) => Number(item.key) > 10)
  .map((item) => item.key);

const uploadProps = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
};

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function DataEntry() {
  const anchorList = [
    {
      key: "text-input-entry",
      href: "#text-input-entry",
      title: "Nhập văn bản",
      children: [
        {
          key: "input",
          href: "#input",
          title: "Nhập liệu (Input)",
        },
        {
          key: "textarea",
          href: "#textarea",
          title: "Nhập văn bản (Textarea)",
        },
        {
          key: "tips-and-helps",
          href: "#tips-and-helps",
          title: "Mẹo và trợ giúp",
        },
        {
          key: "search",
          href: "#search",
          title: "Tìm kiếm (Search)",
        },
      ],
    },
    {
      key: "selection-entry",
      href: "#selection-entry",
      title: "Lựa chọn",
      children: [
        {
          key: "radio-button",
          href: "#radio-button",
          title: "Nút (Radio Button)",
        },
        {
          key: "checkbox",
          href: "#checkbox",
          title: "Hộp (Checkbox)",
        },
        {
          key: "switch",
          href: "#switch",
          title: "Công tắc (Switch)",
        },
        {
          key: "dropdown",
          href: "#dropdown",
          title: "Chọn danh sách (Dropdown)",
        },
        {
          key: "slider",
          href: "#slider",
          title: "Thanh trượt (Slider)",
        },
        {
          key: "transfer",
          href: "#transfer",
          title: "Chuyển đổi (Transfer)",
        },
        {
          key: "datepicker",
          href: "#datepicker",
          title: "Bảng chọn ngày (DatePicker)",
        },
      ],
    },
    {
      key: "upload",
      href: "#upload",
      title: "Tải lên (Upload)",
      children: [
        {
          key: "upload-by-simple-clicks",
          href: "#upload-by-simple-clicks",
          title: "Cú nhấp chuột đơn giản",
        },
        {
          key: "upload-by-displaying-thumbnails",
          href: "#upload-by-displaying-thumbnails",
          title: "Hiển thị hình thu nhỏ",
        },
        {
          key: "upload-by-drag-and-drop",
          href: "#upload-by-drag-and-drop",
          title: "Kéo và thả",
        },
      ],
    },
  ];

  const [value, setValue] = useState({
    radio: 1,
    slider: 1,
  });

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const handleRadioChange = (e) => {
    setValue({ ...value, radio: e.target.value });
  };
  const handleSliderChange = (value) => {
    setValue({ ...value, slider: value });
  };

  const handleTransferChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };
  const handleTransferSelectChange = (
    sourceSelectedKeys,
    targetSelectedKeys
  ) => {
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <ContentDetail anchorList={anchorList}>
      <Title>Nhập dữ liệu</Title>
      <Paragraph>
        Nhập dữ liệu là một cách tương tác quan trọng để lấy thông tin đối tượng
        và người dùng sẽ thường xuyên thêm, sửa đổi hoặc xóa thông tin. Đa dạng
        cách nhập văn bản giúp người dùng hoàn thành các tương tác rõ ràng và
        hiệu quả hơn. Người thiết kế cần lưu ý những điều sau:
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            Nên cung cấp các "Nhãn (Label)". Khi người dùng nên cung cấp thông
            tin nhạy cảm, các gợi ý có thể được sử dụng để xác định lý do tại
            sao hệ thống cần làm như vậy. Ví dụ: cccd/cmnd hoặc số điện thoại
            của người dùng.
          </li>
          <li>
            Cần có "giá trị mẫu", "gợi ý", "mẹo nhập liệu",...Tránh người dùng
            hoang mang khi nhập liệu.
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <Form>
        <div id="text-input-entry" className="mb-20">
          <Title level={2}>Nhập văn bản</Title>
          <Paragraph>
            Cung cấp một thành phần có thể chỉnh sửa văn bản cho người dùng, đây
            là cách cơ bản và phổ biến nhất để nhập dữ liệu.
          </Paragraph>
        </div>
        <div id="input" className="mb-20">
          <Title level={3}>Nhập liệu (Input)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Nó sử dụng một dòng duy nhất để nhập văn bản với độ dài hạn chế.
              </Paragraph>
              <Paragraph>
                <blockquote>
                  Lưu ý: Có thể áp dụng các kiểu đặc biệt cho một số văn bản,
                  chẳng hạn như số và URL. Xem thêm{" "}
                  <a
                    href={REFERENCE_LINK.ant_input}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tại đây
                  </a>
                  .
                </blockquote>
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_INPUT}>
                <Card className="card-shadow">
                  <Form.Item name="address" label="Địa chỉ">
                    <Input />
                  </Form.Item>
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="textarea" className="mb-20">
          <Title level={3}>Nhập văn bản (Textarea)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Kiểu nhập văn bản nhiều dòng cho một văn bản dài.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_TEXTAREA}>
                <Card className="card-shadow">
                  <Form.Item name="content" label="Nội dung">
                    <Input.TextArea />
                  </Form.Item>
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="tips-and-helps" className="mb-20">
          <Title level={3}>Mẹo và trợ giúp</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Để nâng cao hiệu quả nhập liệu, thông thường người ta có thể
                thêm gợi ý ẩn vào ô nhập liệu để giúp nhắc nhở người dùng.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_TIPS_1}>
                <Card className="card-shadow">
                  <Form.Item name="tips1" label="Họ và tên">
                    <Input placeholder="Nguyễn Văn A" />
                  </Form.Item>
                </Card>
              </PreviewImage>
              <br />
              <PreviewImage src={DATA_ENTRY_TIPS_2}>
                <Card className="card-shadow">
                  <Form.Item label="Họ và tên">
                    <Space className="w-full">
                      <Form.Item name="tips2" noStyle>
                        <Input />
                      </Form.Item>
                      <Tooltip
                        title={
                          <>
                            Nhập đầy đủ họ và tên <br />
                            (Ví dụ: Nguyễn Văn A)
                          </>
                        }
                      >
                        <InfoCircleOutlined />
                      </Tooltip>
                    </Space>
                  </Form.Item>
                </Card>
              </PreviewImage>
              <br />
              <PreviewImage src={DATA_ENTRY_TIPS_3}>
                <Card className="card-shadow">
                  <Form.Item
                    name="tips3"
                    label="Họ và tên"
                    extra="Ví dụ: Nguyễn Văn A"
                  >
                    <Input />
                  </Form.Item>
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="search" className="mb-20">
          <Title level={3}>Tìm kiếm (Search)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Tìm kiếm cho phép người dùng thu hẹp phạm vi mục tiêu trong một
                kho thông tin khổng lồ và nhanh chóng có được thông tin họ cần.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_SEARCH}>
                <Card className="card-shadow">
                  <Form.Item name="search">
                    <Select
                      showSearch
                      placeholder="Tìm kiếm"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={options}
                    />
                  </Form.Item>
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="selection-entry" className="mb-20">
          <Title level={2}>Lựa chọn</Title>
          <Paragraph>Cho phép người dùng chọn từ một phạm vi cụ thể.</Paragraph>
        </div>
        <div id="radio-button" className="mb-20">
          <Title level={3}>Nút (Radio Button)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Các nút cho phép người dùng chọn một tùy chọn từ nhiều tùy chọn.
                Tất cả các tùy chọn đều hiển thị theo mặc định, thuận tiện cho
                người dùng lựa chọn khi so sánh, vì vậy không nên có quá nhiều
                tùy chọn.
              </Paragraph>
              <Paragraph>
                <blockquote>
                  Lưu ý: Nút phải lớn hơn 2, thường nhỏ hơn 5.
                </blockquote>
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_RADIO}>
                <Card className="card-shadow flex-center">
                  <Radio.Group value={value.radio} onChange={handleRadioChange}>
                    {options.map((otp) => (
                      <Radio key={otp.value} value={otp.value}>
                        {otp.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="checkbox" className="mb-20">
          <Title level={3}>Hộp (Checkbox)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Sử dụng để chọn nhiều tùy chọn từ một số tùy chọn.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_CHECKBOX}>
                <Card className="card-shadow flex-center">
                  <Checkbox.Group options={options} defaultValue={[1]} />
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="switch" className="mb-20">
          <Title level={3}>Công tắc (Switch)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Sử dụng để chuyển trạng thái của một tùy chọn. Ví dụ: Tắt/Bật,
                Không cho phép/Cho phép,...
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_SWITCH}>
                <Card className="card-shadow flex-center">
                  <Space>
                    <Switch
                      checkedChildren="Bật"
                      unCheckedChildren="Tắt"
                      defaultChecked
                    />
                    <Switch
                      checkedChildren="Cho phép"
                      unCheckedChildren="Không cho phép"
                      defaultChecked
                    />
                  </Space>
                </Card>
              </PreviewImage>
            </Col>
            <Col span={14}>
              <Paragraph></Paragraph>
            </Col>
            <Col span={10}>
              <Row gutter={gutter}>
                <Col span={12}>
                  <PreviewImage src={DATA_ENTRY_SWITCH_GOOD} status="good">
                    <Paragraph className="fw-600">Ví dụ đúng</Paragraph>
                  </PreviewImage>
                </Col>
                <Col span={12}>
                  <PreviewImage src={DATA_ENTRY_SWITCH_BAD} status="bad">
                    <Paragraph className="fw-600">
                      Ví dụ sai
                      <span className="desc">
                        Việc bật/tắt "công tắc" sẽ có hiệu lực ngay lập tức và
                        không cần sử dụng kết hợp với nút hành động.
                      </span>
                    </Paragraph>
                  </PreviewImage>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div id="dropdown" className="mb-20">
          <Title level={3}>Chọn danh sách (Dropdown)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Thả xuống danh sách cung cấp nhiều tùy chọn, cho phép người dùng
                chọn một hoặc nhiều giá trị từ danh sách tùy chọn.
              </Paragraph>
              <Paragraph>
                <blockquote>
                  Ghi chú:
                  <ol>
                    <li>Được sử dụng khi có nhiều hơn 5 lựa chọn.</li>
                    <li>Danh sách các tùy chọn được sắp xếp hợp lý.</li>
                  </ol>
                </blockquote>
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_DROPDOWN}>
                <Row gutter={gutter}>
                  <Col span={12}>
                    <Card className="card-shadow">
                      <p className="fw-600 mb-16">Chọn một</p>
                      <Select
                        className="w-full"
                        defaultValue={1}
                        options={dropOptions}
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card className="card-shadow">
                      <p className="fw-600 mb-16">Chọn nhiều</p>
                      <Select
                        className="w-full"
                        defaultValue={[1]}
                        options={dropOptions}
                        mode="multiple"
                      />
                    </Card>
                  </Col>
                </Row>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="slider" className="mb-20">
          <Title level={3}>Thanh trượt (Slider)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Thanh trượt cho phép chọn một giá trị phù hợp bằng cách di
                chuyển "neo" t. Ví dụ: âm lượng, độ sáng, độ bão hòa màu,...
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_SLIDER_1}>
                <Card className="card-shadow">
                  <Slider defaultValue={30} />
                </Card>
                <br />
                <Card className="card-shadow">
                  <Slider range marks={marks} defaultValue={[26, 37]} />
                </Card>
              </PreviewImage>
            </Col>
            <Col span={14}>
              <Paragraph>
                <blockquote>
                  Lưu ý: Các thao tác có thể linh hoạt và thuận tiện hơn khi sử
                  dụng "Thanh trượt" khi không yêu cầu giá trị chính xác. "Nhập
                  số" có thể được làm việc cùng với Thanh trượt để có giá trị
                  chính xác.
                </blockquote>
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_SLIDER_2}>
                <Card className="card-shadow">
                  <Row gutter={gutter}>
                    <Col span={12}>
                      <Slider
                        min={1}
                        max={20}
                        onChange={handleSliderChange}
                        value={
                          typeof value.slider === "number" ? value.slider : 0
                        }
                      />
                    </Col>
                    <Col span={4}>
                      <InputNumber
                        min={1}
                        max={20}
                        style={{
                          margin: "0 16px",
                        }}
                        value={value.slider}
                        onChange={handleSliderChange}
                      />
                    </Col>
                  </Row>
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="transfer" className="mb-20">
          <Title level={3}>Chuyển đổi (Transfer)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Di chuyển các phần tử giữa hai cột theo cách trực quan và hiệu
                quả.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_TRANSFER}>
                <Card className="flex-center card-shadow">
                  <Transfer
                    dataSource={mockData}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={handleTransferChange}
                    onSelectChange={handleTransferSelectChange}
                    render={(item) => item.title}
                    locale={{ itemsUnit: "Mục" }}
                  />
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="datepicker" className="mb-20">
          <Title level={3}>Bảng chọn ngày (DatePicker)</Title>
          <Row gutter={gutter}>
            <Col span={14}>
              <Paragraph>
                Cung cấp bảng chọn một cách trực quan để duyệt và chọn ngày hoặc
                phạm vi ngày cho người dùng.
              </Paragraph>
            </Col>
            <Col span={10}>
              <PreviewImage src={DATA_ENTRY_DATE_PICKER}>
                <Card className="card-shadow">
                  <Space>
                    <DatePicker placeholder="Chọn ngày" />
                    <DatePicker.RangePicker
                      placeholder={["Ngày bắt đầu", "Ngày kết thúc"]}
                    />
                  </Space>
                </Card>
              </PreviewImage>
            </Col>
          </Row>
        </div>
        <div id="upload" className="mb-20">
          <Title level={2}>Tải lên (Upload)</Title>
          <Paragraph>
            Là quá trình đưa thông tin (từ bộ nhớ cục bộ hoặc đám mây) đến máy
            chủ từ xa thông qua trang web hoặc công cụ tải lên.
          </Paragraph>
        </div>
        <div id="upload-by-simple-clicks" className="mb-20">
          <Title level={3}>Cú nhấp chuột đơn giản</Title>
          <Row gutter={gutter}>
            <Col span={12}>
              <PreviewImage src={DATA_ENTRY_UPLOAD_CLICK}></PreviewImage>
            </Col>
            <Col span={12}>
              <Card className="card-shadow h-full flex-center">
                <Upload name="upload-click" {...uploadProps}>
                  <Button icon={<UploadOutlined />}>Nhấp để tải lên</Button>
                </Upload>
              </Card>
            </Col>
          </Row>
        </div>
        <div id="upload-by-displaying-thumbnails" className="mb-20">
          <Title level={3}>Hiển thị hình thu nhỏ</Title>
          <Row gutter={gutter}>
            <Col span={12}>
              <PreviewImage src={DATA_ENTRY_UPLOAD_THUMBNAILS}></PreviewImage>
            </Col>
            <Col span={12}>
              <Card className="card-shadow h-full">
                <Upload
                  name="upload-thumbnails"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  {...uploadProps}
                >
                  {fileList.length >= 8 ? null : (
                    <div>
                      <PlusOutlined />
                      <div
                        style={{
                          marginTop: 8,
                        }}
                      >
                        Tải lên
                      </div>
                    </div>
                  )}
                </Upload>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{
                      width: "100%",
                    }}
                    src={previewImage}
                  />
                </Modal>
              </Card>
            </Col>
          </Row>
        </div>
        <div id="upload-by-drag-and-drop" className="mb-20">
          <Title level={3}>Kéo và thả</Title>
          <Row gutter={gutter}>
            <Col span={12}>
              <PreviewImage src={DATA_ENTRY_UPLOAD_DRAG}></PreviewImage>
            </Col>
            <Col span={12}>
              <Card className="card-shadow h-full flex-center">
                <Upload.Dragger {...uploadProps} name="upload-drag" multiple>
                  <p className="ant-upload-drag-icon">
                  <CloudUploadOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Nhấp hoặc kéo tệp vào khu vực này để tải lên
                  </p>
                  <p className="ant-upload-hint">
                    Hỗ trợ tải lên một lần hoặc hàng loạt. nghiêm cấm tải lên dữ
                    liệu công ty hoặc các tệp ban nhạc khác
                  </p>
                </Upload.Dragger>
              </Card>
            </Col>
          </Row>
        </div>
      </Form>
    </ContentDetail>
  );
}
