
import { Typography } from 'antd';
import { Image } from 'antd';
import { Col, Row } from "antd";
import { Input, Form } from 'antd';
import { Button } from 'antd';
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print'
const img = require('../../assets/pic/eclasspa.png');

const { Title, Text } = Typography;

let R: number = 0;
let Voltage: number = 0;
let Power: number = 0;
let QFactor: number = 0;
let Frequency: number = 0;
let L1: number = 0;
let L2: number = 0;
let C1: number = 0;
let C2: number = 0;

function calculate() {
  if (Voltage > 0 && Power > 0 && QFactor > 0 && Frequency > 0) {
    R = 0.5768 * (Math.pow(Voltage, 2) / Power);
    L1 = 2 * (1 + Math.pow(Math.PI, 2) / 4) * (R / Frequency);
    L2 = (QFactor * R) / (2 * Math.PI * Frequency);
    C2 = 1 / (2 * Math.PI * Frequency * R * (QFactor - ((Math.PI * (Math.pow(Math.PI, 2) - 4)) / 16)));
    C1 = 8 / (Math.PI * (Math.pow(Math.PI, 2) + 4) * 2 * Math.PI * Frequency * R);
  }
}

export function Eclass() {

  let [param, setParam] = useState(0);

  const printComponents = useRef(null);
  const handlePrint = useReactToPrint({ content: () => printComponents.current, copyStyles: true })

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
      <Row ref={printComponents} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Row justify="center" align="middle">
          <Col span={24}>
            <Typography>
              <Title style={{ display: 'flex', justifyContent: 'center' }}>E Class Power Amplifier</Title>
            </Typography>
          </Col>
        </Row>

        <Row justify="center" align="top">
          <Col xs={24} xl={12} style={{ padding: '40px' }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 10 }}
              autoComplete="off"
            >
              <Form.Item label="Supply Voltage, V" name="Supply Voltage" rules={[{ required: true }]}>
                <Input
                  onInput={(el) => {
                    Voltage = Number((el.target as HTMLTextAreaElement).value);
                    calculate();
                    setParam(Voltage);
                  }} />
              </Form.Item>
              <Form.Item label="Frequency, Hz" name="Frequency" rules={[{ required: true }]}>
                <Input onInput={(el) => {
                  Frequency = Number((el.target as HTMLTextAreaElement).value);
                  calculate();
                  setParam(Frequency);
                }} />
              </Form.Item>
              <Form.Item label="Output Power, W" name="Output Power" rules={[{ required: true }]}>
                <Input onInput={(el) => {
                  Power = Number((el.target as HTMLTextAreaElement).value);
                  calculate();
                  setParam(Power);
                }} />
              </Form.Item>
              <Form.Item label="Q factor" name="Q factor" rules={[{ required: true }]}>
                <Input onInput={(el) => {
                  QFactor = Number((el.target as HTMLTextAreaElement).value);
                  calculate();
                  setParam(QFactor);
                }} />
              </Form.Item>
            </Form>
            <Text strong mark>Q must be better then 2!</Text>            
          </Col>
          <Col xs={24} xl={8} style={{ padding: '40px' }}>
            <Row>
              <Text>Lf: {`${(L1 * 10e5).toFixed(3)} uH`}</Text>
            </Row>
            <Row>
              <Text>C1: {`${(C1 * 10e8).toFixed(3)} nF`}</Text>
            </Row>
            <Row>
              <Text>C: {`${(C2 * 10e8).toFixed(3)} nF`}</Text>
            </Row>
            <Row>
              <Text>L: {`${(L2 * 10e5).toFixed(3)} uH`}</Text>
            </Row>
            <Row>
              <Text>R: {`${R.toFixed(1)} Ω`}</Text>
            </Row>
          </Col>
          <Col xs={24} xl={12} style={{ padding: '40px' }}>
            <Image
              src={img}
            />
          </Col>
        </Row>
      </Row>

      <Button style={{ width: '150px' }} onClick={handlePrint}>Print Page</Button>
    </div>

  )
}