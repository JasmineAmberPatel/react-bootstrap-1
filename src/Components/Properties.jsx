import React, { Component } from 'react';
import PropertyCard from '../Components/PropertyCard';
import '../../Styles/PropertyCard.css';
import axios from 'axios';
import Alert from './Alert';

class Properties extends Component {
  state = {
    properties: [],
    error: false,
    alertMessage: '',
  };

  componentDidMount = () => {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data: properties }) => this.setState({ properties }))
      .catch(error => {
        this.setState({
          error: true,
        });
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.error && <Alert message={this.state.alertMessage} />}
        <h4>Property List</h4>
        <div>
          {this.state.properties.map(property => (
            <div key={property._id} className="col">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    );
  };
};

export default Properties;
