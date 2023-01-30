import { Button, Popconfirm, Table } from "antd";
import React, { useState } from "react";

const appList = [
  { id: 1, name: "Facebook" },
  { id: 2, name: "Instagram" },
  { id: 3, name: "TikTok" },
  { id: 4, name: "MoMo" },
  { id: 5, name: "YouTube" },
  { id: 6, name: "Netflix" },
];

export default function PopconfirmDemo() {
  const [list, setList] = useState(appList);
  const columns = [
    {
      title: "Tên ứng dụng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (record) => (
        <Popconfirm
          title={`Xóa ứng dụng ${record?.name}`}
          description="Bạn có chắc chắn xóa ứng dụng này không?"
          onConfirm={() => confirm(record?.id)}
          okText="Có"
          cancelText="Không"
        >
          <Button type="primary" danger>
            Xóa
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const confirm = (id) => {
    const newList = list.filter((i) => i.id !== id);
    setList(newList);
  };

  return (
    <Table
      columns={columns}
      dataSource={list}
      rowKey={(record) => record?.id}
    />
  );
}
