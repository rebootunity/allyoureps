import React from 'react';
import RenderOfficial from './RenderOfficial';

class RenderOffice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderOfficials() {
    let officials = this.props.officials;
    return officials.map((o,i) => <RenderOfficial key={i.toString()} official={o}/>);
  }

  render() {
    console.log("office");
    const officials = this.props.officials;
    return (
      <li className="office">
        <h3 className="subtitle office-name">{this.props.office.name}</h3>
        {this.renderOfficials()}
      </li>
    );
  }
}
export default RenderOffice;
