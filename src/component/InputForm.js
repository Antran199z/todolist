import React, { useState } from 'react'
import { Form, Row, Col } from "react-bootstrap"
const InputForm = () => {
  const [list, setList] = useState('')
  const submitHandle = (e) => {
    e.preventDefault();
    setList('')
  };
  return (
    <Form className="mx-2 my-2 " onSubmit={submitHandle}>
      <Form.Group controlId="inputList">
        <Row>
          <Col md={8}>
            <Form.Control placeholder="Enter your list"
              type="text"
              value={list}
              onChange={(e) => setList(e.target.value)}
              required
            />
          </Col>
          <Col md={4}>
            <button type='submit'>add item to list</button>
          </Col>
          {/* <Col md={2}></Col> */}
        </Row>
      </Form.Group>
    </Form>
  )


}

export default InputForm