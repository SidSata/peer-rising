import { lazy } from "react";
import { Row, Col } from 'antd';

const TwoImageGrid = lazy(() => import("../../components/TwoImageGrid"));

const PricingPlans = () => {
  return (
    
    <div style={{ padding: '50px' }}>
        <TwoImageGrid />
      <Row justify="space-around" gutter={[16, 32]}>
        <Col span={6}>
          <div style={{ textAlign: 'center', padding: '20px',  }}>
            <h6>Free</h6>
            <p>$0</p>
            <p>Includes:</p>
            <p><span style={{ color: 'gold' }}>★</span> Accessing example curriculum</p>
            <p><span style={{ color: 'gold' }}>★</span> Free consultation with Peer Rising team</p>
          </div>
        </Col>
        <Col span={6}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h6>Silver</h6>
            <p>$29.99/month</p>
            <p>Includes:</p>
            <p><span style={{ color: 'gold' }}>★</span> Custom curriculum designed according to your student's needs</p>
            <p><span style={{ color: 'gold' }}>★</span> Weekly consultations with Peer Rising team</p>
          </div>
        </Col>
        <Col span={6}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h6>Gold</h6> 
            <p>$59.99/month</p>
            <p>Includes:</p>
            <p><span style={{ color: 'gold' }}>★</span> Custom curriculum designed according to your student's needs</p>
            <p><span style={{ color: 'gold' }}>★</span> Weekly consultations with Peer Rising team</p>
            <p><span style={{ color: 'gold' }}>★</span> Workshop held by Peer Rising team for teachers</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PricingPlans;
