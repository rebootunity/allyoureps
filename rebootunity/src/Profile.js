import React from 'react';

class Profile extends React.Component {
  renderDetails(key,label) {
    if (this.props[key]) {
      return (
        <div className="profile-detail">{label}: {this.props.key}</div>
      )
    }
  }
  
  render() {
    let o = this.props;
    return (
      <li>
        <img className="official-photo" href={o.photoUrl} alt={o.name} />
        <p className="official-name">{o.name}</p>
        <p className="official-party">{o.party}</p>
      </li>
    )
  }
}
export default Profile;