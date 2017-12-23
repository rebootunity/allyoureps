import React from 'react';
import ghost from './packman.png';

class RenderOfficial extends React.Component {  

  renderImg() {
    let alt = "Photo of " + this.props.official.name;
    let img = this.props.official.photoUrl || ghost;
    return (
      <div className="official-photo">
        <img className="official-image" src={img} alt={alt} />
      </div>
    )
  }
  
  renderParty() {
    if (this.props.official.party == 'Unknown' || this.props.official.party == '') {
      return <p className="no-party"></p>
    } else {
      let classes = "official-party official-detail " + this.props.official.party + "-label";
      return (
        <p className={classes}>{this.props.official.party}</p>
      )
    }
  }
  
  render() {
    let classesOfficial = "official " + this.props.official.party;
    
    return (
      <li className={classesOfficial}>
        {this.renderImg()}
        <div className="official-details">
          <p className="official-name official-detail">{this.props.official.name}</p>
          <p className="official-position official-detail">{this.props.official.position}</p>
          {this.renderParty()}
          <p className="official-level official-detail">{this.props.official.level}</p>
        </div>
      </li>
    );
  }
}
export default RenderOfficial;
