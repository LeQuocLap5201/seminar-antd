import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Progress } from "antd";
import { useState } from "react";
import "./index.css";

export default function ProgressDemo({ isCircle = false }) {
  const [percent, setPercent] = useState(70);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  return (
    <div className="flex-center h-full progress-demo">
      <Progress percent={percent} {...(isCircle ? { type: "circle" } : {})} />
      <Button.Group className="mt-16">
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </div>
  );
}
