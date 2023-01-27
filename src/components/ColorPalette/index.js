import { message } from "antd";
import { useCopyToClipboard } from "hooks";
import React from "react";
import "./index.css";

export default function ColorPalette({
  colorPalette,
  title,
  name,
  isHorizontal = false,
  theme = "light",
}) {
  const [, copy] = useCopyToClipboard();

  return (
    <div className={`color-palette ${theme}`}>
      {title ? (
        <div className="color-palette__title">
          <h4>{title}</h4>
        </div>
      ) : null}
      <div
        className={`color-palette__box ${
          isHorizontal ? "horizontal" : "vertical"
        }`}
      >
        {colorPalette?.map((color, index) => (
          <div
            className="color-palette__item"
            key={color}
            style={{ backgroundColor: color }}
            onClick={() =>
              copy(color, () => {
                message.success(
                  `Đã sao chép mã màu @${name}-${index + 1}: ${color}`
                );
              })
            }
          >
            <span className="color-palette__item--text">
              {name ? `${name}-${index + 1}` : index + 1}
            </span>
            <span className="color-palette__item--value">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
