import React from 'react';

class Party extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    let party = this.props.party;

    if (party !== 'Unknown' && party !== '') {
      return <p className={("official-party official-detail " + party + "-label")}>{party}</p>
    } else {
      return null
    }

  }
}
export default Party
