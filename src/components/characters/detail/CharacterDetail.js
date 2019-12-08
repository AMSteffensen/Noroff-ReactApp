import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import DetailList from './DetailList';
import './CharacterDetail.css';
import BreadcrumbComponent from '../../breadcrumb/BreadCrumb';

export default function CharacterDetail({details}) {
  const {
    name,
    image,
    gender,
    origin,
    species,
    status,
    episode,
    location
  } = details;

  return (
    <>
      <BreadcrumbComponent name={name} />
      <Row>
        <Col md={6} className='detail-image'>
          <Image src={image} />
        </Col>
        <Col>
          <h1>{name}</h1>
          <DetailList
            gender={gender}
            species={species}
            status={status}
            episodes={episode}
            location={location}
            origin={origin}
          />
        </Col>
      </Row>
    </>
  );
}

CharacterDetail.propTypes = {
  details: PropTypes.object.isRequired
};
