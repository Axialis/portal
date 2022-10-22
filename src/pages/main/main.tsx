import { Typography } from 'antd';
import { Col, Row } from "antd";

const { Title, Text } = Typography;


export function Main() {
  return (
      <Row justify="center" align="middle">
        <Col span={12}>
          <Typography>
            <Title>Welcome!</Title>
            <Text>First and foremost, this site is intended as an aid to the design of electronic devices.
              There will be a form for calculation of high efficiency resonant amplifiers
              of classes D, E, F, EF2 classes as well as linear amplifiers A, AB.
              The calculation of current mirrors as well as tube devices is given.</Text>
          </Typography></Col>
      </Row>
  )
}