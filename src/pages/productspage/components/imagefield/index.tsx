import React from "react";
import styled from "styled-components";

import {
  EditOutlined,
  SettingOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";

const { Meta } = Card;

const Container = styled.div`
  padding: 16px 16px;
  border: solid 1px #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;
`;

const CardContainer = styled.div`
  width: 250px;
  height: 270px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const NewButton = styled(Button)`
  height: 250px;
  width: 200px;

  svg {
    font-size: 50px;
  }
`;

export const ImageField: React.FC = () => {
  return (
    <Container>
      <Row gutter={[16, 16]}>
        <Col>
          <ImageCard />
        </Col>
        <Col>
          <CardContainer>
            <NewButton type="dashed">
              <PlusCircleFilled />
            </NewButton>
          </CardContainer>
        </Col>
      </Row>
    </Container>
  );
};

const ImageCard: React.FC = () => (
  <CardContainer>
    <Card
      style={{ width: 200, height: 250 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />]}
    >
      <Meta description="Imagem 1" />
    </Card>
  </CardContainer>
);
