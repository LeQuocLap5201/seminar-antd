import { presetDarkPalettes, presetPalettes } from "@ant-design/colors";
import { Col, Row, Switch } from "antd";
import ColorPalette from "components/ColorPalette";
import { useEffect, useState } from "react";
import "./index.css";

export default function ColorList({ showSwitch = false }) {
  const [theme, setTheme] = useState("light");
  const [colorList, setColorList] = useState({});

  const onChange = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    setColorList(theme === "light" ? presetPalettes : presetDarkPalettes);
  }, [theme]);


  return (
    <div className={`color-list ${theme}`}>
      {showSwitch ? (
        <Switch
          className="mb-16"
          checkedChildren="Chế độ tối"
          unCheckedChildren="Chế độ sáng"
          onChange={onChange}
        />
      ) : null}
      <Row gutter={[16, 24]}>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.red}
            name="red"
            title="Dust Red"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.volcano}
            name="volcano"
            title="Volcano"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.orange}
            name="orange"
            title="Sunset Orange"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.gold}
            name="gold"
            title="Calendula Gold"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.yellow}
            name="yellow"
            title="Sunrise Yellow"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.lime}
            name="lime"
            title="Lime"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.green}
            name="green"
            title="Polar Green"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.cyan}
            name="cyan"
            title="Cyan"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.blue}
            name="blue"
            title="Daybreak Blue"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.geekblue}
            name="geekblue"
            title="Geek Blue"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.purple}
            name="purple"
            title="Golden Purple"
          />
        </Col>
        <Col span={8}>
          <ColorPalette
            theme={theme}
            colorPalette={colorList?.magenta}
            name="magenta"
            title="Magenta"
          />
        </Col>
      </Row>
    </div>
  );
}
