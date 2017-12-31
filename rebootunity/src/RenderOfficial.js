import React from 'react';

class RenderOfficial extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      'aria-expanded': false,
      'aria-hidden':true
    }
    // Bind the functions for use in the render
    this.setInterest = this.setState.bind( this )
  }

  // Data structure:
  // {
  //  name: ""
  //  address: [{}]
  //  party: ""
  //  phones: [""]
  //  urls: [""]
  //  photoUrl: ""
  //  channels: [{}]
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
      return <div className="official-no-photo"></div>;
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

  renderUrl() {
    let url = this.props.official.urls !== undefined ? this.props.official.urls[0] : undefined;
    let holder = [];
    if (url !== undefined && url !== '') {
      holder.push(
        <div key="url" className="official-detail weblink">
          <a className="detail-link" href={url} title="Official website" target="_blank" rel="noopener noreferrer" >
            <i className="material-icons">language</i>
            <span>{url}</span>
          </a>
        </div>
      )
    }
    return holder;
  }

  renderPhone() {
    let phone = this.props.official.phones[0];
    return (<div key="phone" className="official-detail phone">
              <a href={("tel:" + phone)} className="detail-link" title="Call this official">
                <i className="material-icons">phone</i>
                <span>{phone}</span></a>
            </div>);
  }

  handleClick() {
    this.setState({
      'aria-expanded':this.state['aria-expanded'] === true ? false : true,
      'aria-hidden':this.state['aria-hidden'] === true ? false : true
    })
  }

  render() {
    let renderedImg = this.renderImg();

    return (
      <li className="expandCollapse official party " data-party={this.props.official.party}>
        <div className="displayed-details">
          {renderedImg}
          <div className="official-details content">
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
        <div key="phone-div" className="usa-accordion-content panel official-phone" aria-hidden={this.state['aria-hidden']}>
          {this.renderPhone()}
          {this.renderUrl()}
        </div>

      </li>
    );
  }
}
export default RenderOfficial;
