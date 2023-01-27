import { generate } from "@ant-design/colors";
import { Col, Row, Switch } from "antd";
import {
  DARK_BACKGROUND_COLOR,
  NEUTRAL_COLOR_PALETTE,
  PRIMARY_COLOR,
} from "common/color";
import ColorPalette from "components/ColorPalette";
import ColorPicker from "components/ColorPicker";
import { useEffect, useState } from "react";
import "./index.css";

export default function ColorTool({ showSwitch = false, isNeutral = false }) {
  const [theme, setTheme] = useState("light");
  const [colorList, setColorList] = useState([]);
  const [primaryColor, setPrimaryColor] = useState(PRIMARY_COLOR);
  const [darkBackgroundColor, setDarkBackgroundColor] = useState(
    DARK_BACKGROUND_COLOR
  );

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color);
  };

  const handleDarkBackgroundColorChange = (color) => {
    setDarkBackgroundColor(color);
  };

  const onChange = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    if (isNeutral) {
      setColorList(NEUTRAL_COLOR_PALETTE);
    } else {
      if (theme === "light") {
        setColorList(generate(primaryColor));
      } else {
        setColorList(
          generate(primaryColor, {
            theme: "dark",
            backgroundColor: darkBackgroundColor,
          })
        );
      }
    }
  }, [darkBackgroundColor, isNeutral, primaryColor, theme]);

  return (
    <div className={`color-tool ${theme}`}>
      {showSwitch ? (
        <Switch
          className="mb-16"
          checkedChildren="Chế độ tối"
          unCheckedChildren="Chế độ sáng"
          onChange={onChange}
        />
      ) : null}
      <div className="mb-16">
        <ColorPalette
          colorPalette={colorList}
          name={isNeutral ? "gray" : "color"}
          isHorizontal
          theme={theme}
        />
      </div>
      {!isNeutral ? (
        <Row className="color-tool__footer">
          <Col span={12}>
            <ColorPicker
              defaultColor={primaryColor}
              colorChange={handlePrimaryColorChange}
              title="Chọn màu chủ đạo"
            />
          </Col>
          <Col span={12}>
            {showSwitch && theme === "dark" ? (
              <ColorPicker
                defaultColor={darkBackgroundColor}
                colorChange={handleDarkBackgroundColorChange}
                title="Chọn màu nền"
              />
            ) : null}
          </Col>
        </Row>
      ) : null}
    </div>
  );
}
