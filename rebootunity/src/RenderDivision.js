import React from 'react';
import RenderOffice from './RenderOffice'

class RenderDivision extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {
      division: {}
    };
  }
  
  renderDivision() {
    let division = this.props.division;
    return division.offices.map((o,i) => <RenderOffice key={i.toString()} office={o}/>);
  }
  
  render() {

    return (
      <div className="division">
        <h2>{this.props.division.name}</h2>
        {this.renderDivision()}
      </div>
    );
  }
}
export default RenderDivision;
