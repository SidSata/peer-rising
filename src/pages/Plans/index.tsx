import { Row, Col } from 'antd';

const PricingPlans = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Row justify="space-around" gutter={[16, 32]}>
        <Col span={6}>
          <div style={{ textAlign: 'center', padding: '20px',  }}>
            <h3>Free</h3>
            <h1>$0</h1>
            <p>Includes:</p>
            <p><span style={{ color: 'gold' }}>★</span> Accessing example curriculum</p>
            <p><span style={{ color: 'gold' }}>★</span> Free consultation with Peer Rising team</p>
          </div>
        </Col>
        <Col span={6}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3>Silver</h3>
            <h1>$29.99/month</h1>
            <p>Includes:</p>
            <p><span style={{ color: 'gold' }}>★</span> Custom curriculum designed according to your student's needs</p>
            <p><span style={{ color: 'gold' }}>★</span> Weekly consultations with Peer Rising team</p>
          </div>
        </Col>
        <Col span={6}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3>Gold</h3> 
            <h1>$59.99/month</h1>
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
