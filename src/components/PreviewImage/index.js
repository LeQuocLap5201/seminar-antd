import { Image } from "antd";
import React from "react";
import "./index.css";

export default function PreviewImage({ src }) {
  return (
    <div className="w-full priview-image">
      <div className="priview-image__box">
        <Image src={src} />
      </div>
    </div>
  );
}
