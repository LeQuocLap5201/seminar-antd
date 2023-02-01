import { Image } from "antd";
import React from "react";
import "./index.css";

export default function PreviewImage({ src, children, status, className }) {
  return (
    <div className={`w-full priview-image${className ? " " + className : ""}`}>
      <div className={`p-16 priview-image__box${status ? ` ${status}` : ""}`}>
        <Image src={src} />
      </div>
      {children ? (
        <div className="mt-16 priview-image__content">{children}</div>
      ) : null}
    </div>
  );
}
