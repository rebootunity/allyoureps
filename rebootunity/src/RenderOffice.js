import React from 'react';
import RenderOfficial from './RenderOfficial';

class RenderOffice extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  renderOfficials() {
    let officials = this.props.office.officials;
    return officials.map((o,i) => <RenderOfficial key={i.toString()} official={o}/>);
  }
  
  render() {
    let classesOffice = "office " + this.props.office.levels;

    return (
      <div className={classesOffice}>
        <h3>{this.props.office.name}</h3>
        {this.renderOfficials()}
      </div>
    );
  }
}
export default RenderOffice;
