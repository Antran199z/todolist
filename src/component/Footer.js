import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap"
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>Copyright &copy; Antran</Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
