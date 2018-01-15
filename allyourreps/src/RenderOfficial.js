import React from 'react';
import Party from './Party';
import SocialLinks from './SocialLinks';
import WebLinks from './WebLinks';
import Phones from './Phones';
import AddressField from './AddressField';

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
    let urls = this.props.official.urls;
    let phones = this.props.official.phones;
    let address = this.props.official.address !== undefined ? this.props.official.address[0] : '';
    let party = this.props.official.party !== undefined ? this.props.official.party : '';

    return (
      <ul className={(" usa-accordion content official has-image-" + hasImg)} aria-expanded={this.state['aria-expanded']}>
        <li className="displayed-details">
          {renderedImg}
          <div className="official-details">
            <p className="official-name official-detail">{this.props.official.name}</p>
            <p className="official-position official-detail">{this.props.official.position}</p>
            <Party party={party}/>
            <p className="official-level official-detail">{this.props.official.level}</p>
          </div>
          <button className="expand-details" aria-expanded={this.state['aria-expanded']}  onClick={this.handleClick.bind(this)}>
            <i className="material-icons">expand_more</i>
          </button>
        </li>
        <li key="address-div" className="usa-accordion-content panel official-address" aria-hidden={this.state['aria-hidden']}>
          {(Object.entries(address)).map((field,i) =>
                <AddressField key={(field[0])} type={field[0]} value={field[1]}/>)}
        </li>
        <li key="phone-div" className="usa-accordion-content panel official-comms" aria-hidden={this.state['aria-hidden']}>
          <Phones phones={phones} />
          <WebLinks urls={urls} />
        </li>
        <li key="social-div" className="usa-accordion-content usa-social-links social-links panel" aria-hidden={this.state['aria-hidden']}>
          <SocialLinks channels={channels} official={this.props.official.name} />
        </li>
      </ul>
    );
  }
}
export default RenderOfficial;
