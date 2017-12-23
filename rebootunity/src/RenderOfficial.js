import React from 'react';
import ghost from './packman.png';

class RenderOfficial extends React.Component {  
  
  render() {
    let classesOfficial = "official " + this.props.official.level + " " + this.props.official.party;
    let t = "Photo of " + this.props.official.name;
    let classesParty = "official-party official-detail " + this.props.official.party + "-label";
    return (
      <li className={classesOfficial}>
        <div className="official-photo">
          <img className="official-image" src={this.props.official.photoUrl} alt={t} />
        </div>
        <div className="official-details">
          <p className="official-name official-detail usa-font-lead">{this.props.official.name}</p>
          <p className="official-position official-detail">{this.props.official.position}</p>
          <p className={classesParty}>{this.props.official.party}</p>
          <p className="official-level official-detail">{this.props.official.level}</p>
        </div>
      </li>
    );
  }
}
export default RenderOfficial;
