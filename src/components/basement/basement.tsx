import { Footer } from "antd/lib/layout/layout"
import { Col, Row } from "antd";

export function Basement() {
  return (
    <Footer>
          <Row justify="center" align="middle">
      <Col>Axialis ©{new Date().getFullYear()}</Col>
    </Row>
    </Footer>
  )
}