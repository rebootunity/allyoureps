import React from 'react';

class RenderAddress extends React.Component { 
  render() {
    return (
      <div className="address">
        <p className="title address-title">Representatives for</p>
        <p className="address-detail">{this.props.addressFields.line1}</p>
        <p className="address-detail">{this.props.addressFields.city}, {this.props.addressFields.state} {this.props.addressFields.zip}</p>
      </div>
    )
  }
}
export default RenderAddress;