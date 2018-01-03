import React from 'react';
import WebLink from './WebLink';

class WebLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    let urls = this.props.urls !== undefined ? this.props.urls : '';
    if (urls.length > 0) {
      return urls.map((url,i) =>
            <WebLink key={this.state.key} url={url}/>);
    } else {
      return null;
    }
  }
}
export default WebLinks
