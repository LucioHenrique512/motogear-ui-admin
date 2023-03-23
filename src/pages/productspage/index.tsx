import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { ProductsTable } from "./components/table";
import { ProductDrawer } from "./components/productdrawer";

export const ProductsPage: React.FC = () => {
  //const [form] = Form.useForm();
  const { Search } = Input;
  const { RangePicker } = DatePicker;
  const [openProductDrawer, setOpenProductDrawer] = useState(false);

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

  return (
    <>
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
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setOpenProductDrawer(true)}
              >
                Novo
              </Button>
            </Form.Item>
          </Form>
        </S.Header>
        <S.Content>
          <ProductsTable onEditClick={() => setOpenProductDrawer(true)} />
        </S.Content>
      </S.Container>
      <ProductDrawer open={openProductDrawer} setOpen={setOpenProductDrawer} />
    </>
  );
};
