import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Col,
  //DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  //Select,
  Space,
} from "antd";
import { ImageField } from "../imagefield";

//const { Option } = Select;

type IProductDrawer = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ProductDrawer: React.FC<IProductDrawer> = ({ open, setOpen }) => {
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Drawer
      title="Cadastro de produto"
      width={620}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancelar</Button>
          <Button
            type="primary"
            form="productForm"
            key="submit"
            htmlType="submit"
          >
            Salvar
          </Button>
        </Space>
      }
    >
      <Form
        name="productForm"
        layout="vertical"
        hideRequiredMark
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="name"
              label="Nome"
              rules={[
                { required: true, message: "Favor digite o nome do produto" },
              ]}
            >
              <Input placeholder="Nome do produto" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Descrição"
              rules={[
                {
                  required: true,
                  message: "Favor insira a descrição",
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Favor insira a descrição" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="price"
              label="Valor"
              rules={[
                { required: true, message: "Favor digite o valor do produto" },
              ]}
            >
              <Input placeholder="R$0,00" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="imageUrls" label="Fotos">
              <ImageField />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};
