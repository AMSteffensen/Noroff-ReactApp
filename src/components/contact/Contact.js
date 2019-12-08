import React from 'react';
import Heading from '../layout/Heading';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

export default function Contact() {
  let history = useHistory();
  return (
    <>
      <Heading title='Contact us' />
      <p>Lorem ipsum dolor sit amet, consectur adipiscing elit</p>
      <Form>
        <Form.Group as={Row} controlId='formGroup'>
          <Form.Label>&nbsp;Name: </Form.Label>
          <Form.Control required type='text' placeholder='Name' />
        </Form.Group>
        <Form.Group as={Row} controlId='formGroup'>
          <Form.Label>&nbsp;Email&nbsp;address</Form.Label>
          <Form.Control required type='email' placeholder='Enter email' />
        </Form.Group>
        <Form.Group as={Row} controlId='formGroup'>
          <Form.Label>&nbsp;Message</Form.Label>
          <Form.Control as='textarea' placeholder='Your message...' rows='4' />
        </Form.Group>

        <Button
          onClick={() => history.push('/')}
          variant='primary'
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </>
  );
}
