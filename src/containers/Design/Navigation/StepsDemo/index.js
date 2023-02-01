import { Button, Steps } from "antd";
import { useState } from "react";

export default function StepsDemo({ items, isVertical = false }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps
        direction={isVertical ? "vertical" : "horizontal"}
        current={current}
        items={items}
      />
      <div className="mt-16">
        {current < items?.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Kế tiếp
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Trước
          </Button>
        )}
      </div>
    </>
  );
}
