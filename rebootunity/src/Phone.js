import React from 'react';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    let phone = this.props.phone !== undefined ? this.props.phone : '';

    return (
          <a key={this.state.key} href={("tel:" + phone)} className="detail-link official-phone" title="Call this official">
            <i className="material-icons">phone</i>
                <span>{phone}</span></a>);
  }
}
export default Phone
