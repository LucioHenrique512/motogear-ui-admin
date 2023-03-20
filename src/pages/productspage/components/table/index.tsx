import React, { useState } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    id: string;
    description: string;
    value: string;
  }

export const ProductsTable:React.FC =()=>{

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      console.log("selectedRowKeys changed: ", newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    };

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

    return<Table
    sticky
    style={{ width: "100%" }}
    rowSelection={rowSelection}
    columns={columns}
    dataSource={data}
  />
}