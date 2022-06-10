import React from 'react'
import {Form,Button} from "react-bootstrap"

 function Details() {
  return (
    <div>
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>FirstName</Form.Label>
    <Form.Control type="text" placeholder="First" />
    <Form.Label>LastName</Form.Label>
    <Form.Control type="text" placeholder="Last" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="blue" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )
}

export {Details}
