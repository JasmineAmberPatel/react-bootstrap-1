import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/AddProperty.css';

class AddProperty extends Component {
  state = {
    fields: {
      title: 'Choose your lovely new abode  ',
      type: 'Flat',
      city: 'Manchester',
      bedrooms: [],
      bathrooms: [],
      price: [],
      email: '',
    },
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing').then(response => {
      console.log(response);
      this.setState({ fields: response.data });
    })
      .catch(function (error) {
        console.log(error);
      });
  }

handleAddProperty = event => {
  event.preventDefault();
  console.log(this.state.fields);
  axios.post('/propertyListing', {
    _id: 'string',
    title: 'string',
    type: 'string',
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    city: 'string',
    email: 'string',
  })
    .then(response => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

handleFieldChange = (event) => {
  this.setState({
    fields: {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    },
  });
};

render() {
  return (
    <div className="AddProperty">
      <form onSubmit={this.handleAddProperty}>
        <label> Property Description: <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} /></label>
        <label>Type of Property:
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label> City:
          <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label> Bedrooms: <input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} /></label>
        <label> Bathrooms: <input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} /></label>
        <label> Price: <input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} /></label>
        <label> Email: <input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} /></label>
        <label> Submit Info: <button type="submit"> Add </button></label>
      </form>
    </div>
  );
}
}

export default AddProperty;
