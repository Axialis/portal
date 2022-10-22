import { Footer } from "antd/lib/layout/layout"
import {
  GithubOutlined,
} from '@ant-design/icons';
import { Col, Row } from "antd";

export function Basement() {
  return (
    <Footer>
          <Row justify="center" align="middle">
      <Col><GithubOutlined /> Axialis {new Date().getFullYear()}</Col>
    </Row>
    </Footer>
  )
}