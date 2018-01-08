import React from 'react';

class RenderAddress extends React.Component {
  render() {
    if (this.props.addressFields === undefined || this.props.addressFields.length === 0) {
      return (
        <div className="no-fields"></div>
      )
    }
    return (
      <div className="address content white-card">
        <h2 className="white-card--heading">Elected Officials</h2>
        <p className="subtitle">Results for:</p>
        <p className="address-detail">{this.props.addressFields.line1}</p>
        <p className="address-detail">{this.props.addressFields.city}, {this.props.addressFields.state} {this.props.addressFields.zip}</p>
      </div>
    )
  }
}
export default RenderAddress;
