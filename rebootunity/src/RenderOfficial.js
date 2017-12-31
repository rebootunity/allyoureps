import React from 'react';

class RenderOfficial extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      'aria-expanded': false,
      'aria-hidden':true,
      official: {},
      controls: ''
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

  renderAddress() {
    let address = this.props.official.address;
    let holder = [];
    if (address !== undefined && address !== '') {
      for (var key in address[0]) {
        holder.push(<p key={key} className={(key + " official-detail")}>{address[0][key]}</p>)
      }
    }
    return holder;
  }

  handleClick() {

    // open submenu
    // close submenu

    this.setState({
      'aria-expanded':this.state['aria-expanded'] === true ? false : true,
      'aria-hidden':this.state['aria-hidden'] === true ? false : true
    })

  }

  render() {
    let renderedImg = this.renderImg();

    return (
      <li className="expandCollapse official party " data-party={this.props.official.party}>
        {renderedImg}
        <div className="official-details content">
          <p className="official-name official-detail">{this.props.official.name}</p>
          <p className="official-position official-detail">{this.props.official.position}</p>
          {this.renderParty()}
          <p className="official-level official-detail">{this.props.official.level}</p>
        </div>
        <button className="expand-details usa-button-secondary usa-button-outline" aria-expanded={this.state['aria-expanded']}  onClick={this.handleClick.bind(this)}>
          <i className="material-icons">more_horiz</i>
        </button>
        <div className="usa-accordion-content official-address official-details content" aria-hidden={this.state['aria-hidden']}>{this.renderAddress()}</div>
      </li>
    );
  }
}
export default RenderOfficial;
