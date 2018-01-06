import React from 'react';

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    let channel = this.props.channel !== undefined ? this.props.channel : '',
        userId = this.props.userId !== undefined ? this.props.userId : '',
        urlBlob = channel;
    if (channel.toLowerCase() === 'googleplus') {
      urlBlob = 'plus.google'
    }

    return (
        <a
          key={this.state.key}
          href={("http://" + urlBlob + ".com/" + userId.toLowerCase())}
          className={(channel + " usa-link-" + channel.toLowerCase() + " social-link detail-link")}
          title={channel}
          target="_blank"
          rel="noopener noreferrer">
            <span>{channel}</span>
        </a>
    )
  }
}
export default SocialLink
