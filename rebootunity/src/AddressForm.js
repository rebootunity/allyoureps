import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    // address string can be populated to pre-load a location if desired
    // ex: address: 'San Francisco, CA'
    // We are leaving it blank
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    // return address to parent component
    this.props.onFormSubmit(this.state.address)
  }

  render() {
    // inputProps param is required
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      id: "PlacesAutocomplete__input"
    }
    // optional param: this will limit results to US addresses only
    const options = {
      types: ['address'],
      componentRestrictions: {'country': ['us', 'pr', 'vi', 'gu', 'mp']}
    }
    // let the input box and submit button sit side-by-side
    const styleProps = {
      root: {
        float: 'left',
        minWidth: '170px',
        width: 'calc(100% - 84px)'
      },
      autocompleteContainer: {
        border: "1px solid #fff"
      },
      autocompleteItemActive: {
        backgroundColor: 'rgba(226,243,248,0.9)'
      }
    }

    return (
      <form onSubmit={this.handleFormSubmit} className="address-form content white-card">
        <h2 className="title">Make your voice heard</h2>
        <label id="js--scrollTarget" htmlFor="PlacesAutocomplete__input" className="address-label">Enter your address</label>
        <PlacesAutocomplete
          inputProps={inputProps}
          options={options}
          styles={styleProps}
        />
        <button className="address-button usa-button" type="submit">Submit</button>
      </form>
    )
  }
}

export default AddressForm
