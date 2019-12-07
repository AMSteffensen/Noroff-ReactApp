import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
import {BASE_URL} from '../../../constants/API';
import './CharacterDetail.css';
import CharacterDetail from './CharacterDetail';
import ErrorAlert from '../../error/ErrorAlert';

export default class CharacterDetailContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    details: null,
    loading: true
  };

  async componentDidMount() {
    const {id} = this.props.match.params;
    const url = `${BASE_URL}/${id}`;

    try {
      const response = await fetch(url);
      const json = await response.json();

      this.setState({
        details: json,
        loading: false
      });
    } catch (error) {
      this.setState({
        details: error,
        loading: false
      });
    }
  }

  render() {
    const {loading, details} = this.state;

    if (loading || !details) {
      return <Spinner animation='border' className='spinner' />;
    }

    if (details.error) {
      return <ErrorAlert message={details.error} />;
    }

    return <CharacterDetail details={details} />;
  }
}
