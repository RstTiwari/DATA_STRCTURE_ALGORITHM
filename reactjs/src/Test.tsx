import React from 'react';
import { Button, Row, Col } from 'antd';

const Test: React.FC = () => (
  <Row gutter={[8, 8]} wrap>
    <Col>
    </Col>
    <Col>
      <Button>Default Button</Button>
    </Col>
    <Col>
      <Button type="dashed">Dashed Button</Button>
    </Col>
    <Col>
      <Button type="text">Text Button</Button>
    </Col>
    <Col>
      <Button type="link">Link Button</Button>
    </Col>
  </Row>
);

export default Test
