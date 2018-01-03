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
    let fields = this.props.address !== undefined ? this.props.address[0] : '';
    if (fields.length > 0) {
      return (Object.entries(fields)).map((field,i) =>
            <AddressField key={(fields[0] + this.state.key)} type={field[0]} value={field[1]}/>);
    } else {
      return null;
    }
  }
}
export default AddressFields
