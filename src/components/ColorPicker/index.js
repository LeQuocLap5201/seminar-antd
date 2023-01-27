import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./index.css";

export default function ColorPicker({ defaultColor, colorChange, title }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleOnChange = (color) => {
    if (colorChange) {
      colorChange(color?.hex);
    }
  };

  return (
    <div className="color-picker" onClick={handleClick}>
      {title ? (
        <p className="mb-20 fw-600 color-picker__title">{title}</p>
      ) : null}
      <div className="color-picker__box">
        <div className="color-picker__main">
          <div
            className="w-full h-full color-picker__content"
            style={{ backgroundColor: defaultColor }}
          ></div>
          {show ? (
            <div className="color-picker__absolute">
              <SketchPicker color={defaultColor} onChange={handleOnChange} />
            </div>
          ) : null}
        </div>
        <span className="fw-600 color-picker__value">{defaultColor}</span>
      </div>
    </div>
  );
}
