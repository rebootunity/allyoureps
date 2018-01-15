import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
var Scroll = require('react-scroll');
var Element = Scroll.Element;


class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    // address string can be populated to pre-load a location if desired
    // ex: address: 'San Francisco, CA'
    // We are leaving it blank
    this.state = { address: '',placeholder: '123 Sesame Street' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit(event) {
    // onFormSubmit is a parent function
    // we need to pass the address up
    // so the parent can make the API call
    this.props.onFormSubmit(this.state.address)
  }

  handleSelect(address, placeId) {
    this.setState({address})
    this.props.onFormSubmit(address)
  }

  handleEnter(event) {
    this.props.onFormSubmit(this.state.address)
  }

  handleFocus(e) {
    e.target.placeholder = ""
  }

  render() {

    // inputProps param is required
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      onBlur: this.onBlur,
      id: "PlacesAutocomplete__input",
      placeholder: this.state.placeholder,
      autoFocus: true
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
        width: 'calc(100% - 92px)'
      },
      autocompleteContainer: {
        border: "1px solid #fff"
      },
      autocompleteItemActive: {
        backgroundColor: 'rgba(226,243,248,0.9)'
      }
    }

    return (
      <form onSubmit={this.handleFormSubmit.bind(this)} className="address-form content">
        <Element name="js--scrollTarget"></Element>
        <label id="js--scrollTarget" htmlFor="PlacesAutocomplete__input" className="address-label">Enter your home address</label>
        <PlacesAutocomplete
          inputProps={inputProps}
          options={options}
          styles={styleProps}
        />
        <button className="address-button usa-button" type="submit">Find em!</button>
        <small className="caption">Home address is only used to obtain results; it is not saved, sold, or shared in any way.</small>
      </form>
    )
  }
}

export default AddressForm
