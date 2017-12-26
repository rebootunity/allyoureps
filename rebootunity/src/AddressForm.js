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
        width: '80%'
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
        <p className="address-form-description">Built with the <a href="https://developers.google.com/civic-information/" target="_blank" rel="noopener noreferrer" title="Google API website for developers">Google Civic Information API</a> and <a href="http://votinginfoproject.org/" target="_blank" rel="noopener noreferrer" title="Voting Information Project website">Voting Information Project</a> to find elected officials for any U.S. residential address at federal, state, <em>and <strong>local</strong></em> levels.</p>
        <label htmlFor="PlacesAutocomplete__input" className="address-label">Enter your address</label>
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
