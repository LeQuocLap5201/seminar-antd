import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Space, Switch } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";

const style = { marginLeft: 16 };

export default function BadgeDemo({ isDot = false }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const increase = () => {
    setCount(count + 1);
  };

  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  const onChange = (checked) => {
    setShow(checked);
  };

  return (
    <Space className="mb-16">
      {isDot ? (
        <>
          <Badge dot={show}>
            <Avatar shape="square" size="large" />
          </Badge>
          <Switch onChange={onChange} checked={show} style={style} />
        </>
      ) : (
        <>
          <Badge count={count}>
            <Avatar shape="square" size="large" />
          </Badge>
          <ButtonGroup style={style}>
            <Button onClick={decline} icon={<MinusOutlined />} />
            <Button onClick={increase} icon={<PlusOutlined />} />
          </ButtonGroup>
        </>
      )}
    </Space>
  );
}
