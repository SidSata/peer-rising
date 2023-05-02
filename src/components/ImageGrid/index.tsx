import React from 'react';
import { Row, Col } from 'antd';

const ImageGrid: React.FC = () => {
  return (
    <Row gutter={[16, 16]} style={{ padding: '16px 0' }}>
      <Col xs={24} sm={12}>
        <img src="img/customized/1.png" width="100%" height="100%"/>
      </Col>
      <Col xs={24} sm={12}>
        <img src="img/customized/2.png"  width="100%" height="100%"/>
      </Col>
      <Col xs={24} sm={12}>
        <img src="img/customized/3.png"  width="100%" height="100%"/>
      </Col>
      <Col xs={24} sm={12}>
        <img src="img/customized/4.png"  width="100%" height="100%"/>
      </Col>
    </Row>
  );
};

export default ImageGrid;
