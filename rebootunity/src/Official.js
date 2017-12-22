import React from 'react';
import ghost from './packman.png';

class Official extends React.Component {  
  
  render() {
    let classesOfficial = "official " + this.props.official.level + " " + this.props.official.party;
    let t = "Photo of " + this.props.official.name;
    let classesParty = "official-party official-detail " + this.props.official.party + "-label";
    return (
      <li className={classesOfficial}>
        <img className="official-photo" src={ghost} alt={t} />
        <div className="official-details">
          <p className="official-name official-detail">{this.props.official.name}</p>
          <p className="official-position official-detail">{this.props.official.position}</p>
          <p className={classesParty}>{this.props.official.party}</p>
          <p className="official-level official-detail">{this.props.official.level}</p>
        </div>
      </li>
    );
  }
}
export default Official;
