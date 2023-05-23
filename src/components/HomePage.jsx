import React from "react";
import milify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import Link from "react-router-dom";
import Title from "antd/es/skeleton/Title";

const HomePage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypto Currency" value="5" />
          <Statistic title="Total Exchanges" value="5" />
          <Statistic title="Total Market Cap" value="5" />
          <Statistic title="Total 24h Volume" value="5" />
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
