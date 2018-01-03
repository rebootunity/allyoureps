import React from 'react';
import Phone from './Phone';

class Phones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    let phones = this.props.phones !== undefined ? this.props.phones : '';
    if (phones.length > 0) {
      return phones.map((phone,i) =>
            <Phone key={this.state.key} phone={phone}/>);
    } else {
      return null;
    }
  }
}
export default Phones
