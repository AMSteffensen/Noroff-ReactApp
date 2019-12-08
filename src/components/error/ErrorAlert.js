import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ErrorAlert({message}) {
  return (
    <Row>
      <Col>
        <Alert variant='danger'>
          <Alert.Heading> Red Alert! </Alert.Heading>
          <b> {message} </b>{' '}
        </Alert>{' '}
      </Col>{' '}
    </Row>
  );
}

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired
};
