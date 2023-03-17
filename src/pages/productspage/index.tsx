import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import * as S from "./styles";
import type { ColumnsType } from "antd/es/table";

export const ProductsPage: React.FC = () => {
  const [form] = Form.useForm();
  const { Search } = Input;
  const { RangePicker } = DatePicker;

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const options = [
    {
      value: "description",
      label: "Descrição",
    },
    {
      value: "id",
      label: "id",
    },
  ];

  interface DataType {
    key: React.Key;
    id: string;
    description: string;
    value: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Descrição",
      dataIndex: "description",
    },
    {
      title: "Valor",
      dataIndex: "value",
    },
  ];

  const data: DataType[] = [
    {
      key: 0,
      id: "0",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },
    {
      key: 1,
      id: "1",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },
    {
      key: 2,
      id: "2",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },
    {
      key: 3,
      id: "3",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },
    {
      key: 0,
      id: "1",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },
    {
      key: 4,
      id: "4",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },{
      key: 5,
      id: "5",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },{
      key: 6,
      id: "6",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },{
      key: 7,
      id: "7",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },{
      key: 8,
      id: "8",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },{
      key: 9,
      id: "9",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },{
      key: 10,
      id: "10",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },{
      key: 11,
      id: "11",
      description: `Relâmpago Marquinhos`,
      value: `R$ 1000,00`,
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <S.Container>
      <S.Header>
        <Form style={{ position: "relative" }} layout="inline">
          <Form.Item
            label={"Pesquisar por"}
            style={{ width: 500 }}
            labelAlign="right"
          >
            <Search
              placeholder="Pesquisar produto"
              onSearch={() => {}}
              enterButton
              addonBefore={
                <Select defaultValue="description" options={options} />
              }
            />
          </Form.Item>
          <Form.Item label={"Data de criação"} labelAlign="right">
            <RangePicker />
          </Form.Item>
          <Form.Item
            style={{
              position: "absolute",
              right: 0,
              marginInlineEnd: 0,
            }}
          >
            <Button type="primary" icon={<PlusOutlined />}>
              Novo
            </Button>
          </Form.Item>
        </Form>
      </S.Header>
      <S.Content>
        <Table
          sticky
          style={{ width: "100%" }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </S.Content>
    </S.Container>
  );
};
