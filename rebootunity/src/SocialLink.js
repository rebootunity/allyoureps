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
        userId = this.props.id !== undefined ? this.props.id : ''

    return (
        <a
          key={this.state.key}
          href={("http://" + channel + ".com/" + userId)}
          className={(channel + " social-link detail-link")}
          title={channel}
          target="_blank"
          rel="noopener noreferrer">
            {channel}
        </a>
    )
  }
}
export default SocialLink
