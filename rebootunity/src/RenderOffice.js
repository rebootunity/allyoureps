import React from 'react';
import RenderOfficial from './RenderOfficial';

class RenderOffice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderOfficials(officials) {
    return officials.map((o,i) => <RenderOfficial key={i.toString()} official={o} />);
  }

  render() {
    const office = this.props.office;
    // console.log("thisme");
    // console.log(this);
    return (
      <ul className="offices usa-accordion ">
        <li className="office " data-office={this.props.office.name}>
            <h4 className="subtitle office-name">{this.props.office.name}</h4>
            <ul className="officials ">
              {this.renderOfficials(office.officials)}
            </ul>
        </li>
      </ul>
    );
  }
}
export default RenderOffice;
