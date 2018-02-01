import React from 'react';

class WebLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    let url = this.props.url !== undefined ? this.props.url : '';

    return (
        <a
          key={this.state.key}
          href={url}
          className={(url + " web-link detail-link")}
          title="Website"
          target="_blank"
          rel="noopener noreferrer">
          <i className="material-icons">language</i>
            <span>{url}</span>
        </a>
    )
  }
}
export default WebLink
