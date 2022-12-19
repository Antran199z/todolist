import React from 'react'
import { ListGroup, Button, Row, Col } from 'react-bootstrap'
const TodoList = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col md={8}>to do1</Col>
            <Col md={2}>
              <Button variant='success'>
                <i class="fa-solid fa-check"></i>
              </Button>
            </Col>
            <Col md={2}>
              <Button>
                <i class="fa-solid fa-trash"></i>
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default TodoList
// /rafce/