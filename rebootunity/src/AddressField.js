import React from 'react';

class AddressField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    // Technically the API returns
    // an array for address, implying
    // more than one possible
    // For now we're just grabbing one
    let type = this.props.type !== undefined ? this.props.type : '';
    let value = this.props.value !== undefined ? this.props.value : '';

    if (value !== '') {
      return <p className={type}>{value}</p>
    } else {
      return null;
    }
  }
}
export default AddressField
