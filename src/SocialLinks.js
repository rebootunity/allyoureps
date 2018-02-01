import React from 'react';
import SocialLink from './SocialLink';

class SocialLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    let channels = this.props.channels !== undefined ? this.props.channels : '';
    if (channels.length > 0) {
      return channels.map((channel,i) =>
            <SocialLink key={(channel["type"] + channel["id"] + this.state.key)} channel={channel["type"]} userId={channel["id"]}/>);
    } else {
      return null;
    }
  }
}
export default SocialLinks
