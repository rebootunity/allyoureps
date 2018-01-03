import React from 'react';
import SocialLinks from './SocialLinks';
import WebLinks from './WebLinks';
import Phones from './Phones';
import AddressFields from './AddressFields';

class RenderOfficial extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'aria-expanded':false,
      'aria-hidden':true,
      'hasImg':this.haveImg()
    }
    // Bind the functions for use in the render
    this.setInterest = this.setState.bind( this )
  }

  haveImg() {
    if (this.props.official.photoUrl !== undefined ? true : false) {
      if (this.props.official.photoUrl.length > 0 ? true : false) {
        return true;
      }
    }
    return false;
  }

  // Data structure:
  // {
  //  name: ""
  //  address: [{}]
  //  party: ""
  //  phones: [""]
  //  urls: [""]
  //  photoUrl: ""
  //  channels: [{}] (social links)
  // }

  renderImg() {
    let alt = "Photo of " + this.props.official.name;
    let img = this.props.official.photoUrl;

    if (img !== undefined && img !== '') {
      return (
        <div className="official-photo">
          <img className="official-image" src={img} alt={alt} />
        </div>
      )
    } else {
      return ''
    }
  }

  renderParty() {
    if (this.props.official.party === 'Unknown' || this.props.official.party === '') {
      return <p className="no-party"></p>
    } else {
      let classes = "official-party official-detail " + this.props.official.party + "-label";
      return (
        <p className={classes}>{this.props.official.party}</p>
      )
    }
  }


  renderAddressDetails(address) {
    const addressDetails = []
    for (const [key, value] of Object.entries(address)) {
      addressDetails.push(<div key={key} className={(key + " address-detail")}>{value}</div>)
    }
    return addressDetails
  }

  renderAddress() {
    let address = this.props.official.address !== undefined ? this.props.official.address[0] : undefined;
    let holder = [];
    if (address !== undefined && address !== '') {
      holder.push(
        <div key="address" className="official-detail">
            <div className="address-details">
              {this.renderAddressDetails(address)}
            </div>
        </div>
      )
    }
    return holder;
  }


  handleClick() {
    this.setState({
      'aria-expanded':this.state['aria-expanded'] === true ? false : true,
      'aria-hidden':this.state['aria-hidden'] === true ? false : true
    })
  }

  render() {
    let renderedImg = this.renderImg();
    let hasImg = this.state.hasImg;
    let channels = this.props.official.channels;
    let urls = this.props.urls;
    let phones = this.props.phones;

    return (
      <li className={("content official has-image-" + hasImg)}>
        <div className="displayed-details">
          {renderedImg}
          <div className="official-details">
            <p className="official-name official-detail">{this.props.official.name}</p>
            <p className="official-position official-detail">{this.props.official.position}</p>
            {this.renderParty()}
            <p className="official-level official-detail">{this.props.official.level}</p>
          </div>
          <button className="expand-details" aria-expanded={this.state['aria-expanded']}  onClick={this.handleClick.bind(this)}>
            <i className="material-icons">expand_more</i>
          </button>
        </div>
        <div key="address-div" className="usa-accordion-content panel official-address" aria-hidden={this.state['aria-hidden']}>
          {this.renderAddress()}
        </div>
        <div key="phone-div" className="usa-accordion-content panel official-comms" aria-hidden={this.state['aria-hidden']}>
          <Phones phones={phones} />
          <WebLinks urls={urls} />
        </div>
        <div key="social-div" className="usa-accordion-content social-links panel" aria-hidden={this.state['aria-hidden']}>
          <SocialLinks channels={channels} />
        </div>
      </li>
    );
  }
}
export default RenderOfficial;
