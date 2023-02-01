import { Pagination } from "antd";
import React from "react";

export default function PaginationDemo({ total = 50, type = "basic" }) {
  return <Pagination simple={type === "simple"} total={total} />;
}
