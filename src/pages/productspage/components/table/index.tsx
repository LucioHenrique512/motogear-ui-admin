import React, { useState } from "react";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";

interface DataType {
  key: React.Key;
  id: string;
  description: string;
  value: string;
  quantity: number;
}

type IProductsTable = {
  onEditClick: (id: string) => void;
};

export const ProductsTable: React.FC<IProductsTable> = ({ onEditClick }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "id",
      dataIndex: "id",
      width: 90,
      fixed: "left",
    },
    {
      title: "Descrição",
      dataIndex: "description",
    },
    {
      title: "Valor",
      dataIndex: "value",
    },
    {
      title: "Estoque",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => (
        <Button onClick={() => onEditClick("0")} type="default">
          <EditOutlined />
        </Button>
      ),
    },
  ];

  const data: DataType[] = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      id: i.toString(),
      description: faker.name.fullName(),
      value: `R$ ${(Math.random() * 1000).toLocaleString("pt-br", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      })}`,
      quantity: Math.round(Math.random() * 1000),
    });
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      sticky
      style={{ width: "100%" }}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{ x: 800 }}
    />
  );
};
