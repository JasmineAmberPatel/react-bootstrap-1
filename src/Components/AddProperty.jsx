import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/AddProperty.css';
import '../../Styles/alert.css';
import Alert from '../Components/Alert';

class AddProperty extends Component {
  state = {
    fields: {
      title: '',
      type: 'Flat',
      city: 'Manchester',
      bedrooms: [],
      bathrooms: [],
      price: [],
      email: '',
      alertMessage: '',
      isSuccess: false,
      isError: false,
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    console.log(this.state.fields);
    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      title: this.state.fields.title,
      type: this.state.fields.type,
      bedrooms: this.state.fields.bedroom,
      bathrooms: this.state.fields.bathrooms,
      price: this.state.fields.price,
      city: this.state.fields.city,
      email: this.state.fields.email,
    })
      .then(response => {
        this.setState({
          isSuccess: true,
          alertMessage: 'Property added.',
        });
        console.log(response);
      })
      .catch(error => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
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
        {this.state.isError && <Alert message={this.state.alertMessage} />}
        <form onSubmit={this.handleAddProperty}>
          <label> Property Description: <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} /></label>
          <div className="row">
            <label>Type of Property:</label>
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div className="cityrow">
            <label> City: </label>
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div><label> Bedrooms: <input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} /></label></div>
          <div><label> Bathrooms: <input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} /></label></div>
          <div><label> Price: <input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} /></label></div>
          <div><label> Email: <input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} /></label></div>
          <div><label> Submit Info: <button type="submit"> Add </button></label></div>
          <div className="success">{this.state.isSuccess && <Alert message={this.state.alertMessage} success />}</div>
          <div className="error">{this.state.isError && <Alert message={this.state.alertMessage} />}</div>
        </form>
      </div>
    );
  }
}

export default AddProperty;
