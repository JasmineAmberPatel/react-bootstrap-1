import React, { Fragment, Component } from 'react';
import '../Styles/AddProperty.css';

class AddProperty extends Component {
  state = {
    fields: {
      title: 'Choose your lovely new abode  ',
      type: 'Flat',
      location: 'Manchester',
      bedrooms: [],
      bathrooms: [],
      price: [],
      email: '',
    },
  };

handleAddProperty = event => {
  event.preventDefault();
  console.log(this.state.fields);
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
        <label> Property Description <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} /></label>
        <label>Type of Property
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label> Location
          <select name="location" value={this.state.fields.location} onChange={this.handleFieldChange}>
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
