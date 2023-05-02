import React from 'react';
import { Row, Col } from 'antd';

const TwoImageGrid: React.FC = () => {
  return (
    <Row gutter={[16, 16]} style={{ padding: '32px 0' }}>
      <Col xs={24} sm={12}>
        <img src="img/plans/4.png" alt="" width="100%" height="100%"/>
      </Col>
      <Col xs={24} sm={12}>
        <img src="img/plans/5.png" alt="" width="100%" height="100%"/>
      </Col>
    </Row>
  );
};

export default TwoImageGrid;
