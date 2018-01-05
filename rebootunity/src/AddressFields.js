import React from 'react';
import AddressField from './AddressField';

class AddressFields extends React.Component {
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
    let fields = this.props.address !== undefined ? this.props.address : '';
    console.log(fields);
    if (fields.length > 0) {
      return
    } else {
      return null;
    }
  }
}
export default AddressFields
