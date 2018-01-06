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
        <h1 className="white-card--heading">            <i className="material-icons">star</i>
          All Your Reps
          <i className="material-icons">star</i>
        </h1>
        <h2 className="title">Your elected officials from all levels of government</h2>
        <p><strong><span className="underline">All Your Reps</span></strong> takes the work out of finding your elected officials, so that you can focus on the issues.</p>
        <p>From judges to President, Congress to county commissioner, finding out who holds offices you get to elect can feel like stumbling in the dark.</p>
        <p>Here you can search for your elected representatives at all levels, all in one spot. Bookmark it, print it, send it to your email -- whatever works best for you!</p>
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
