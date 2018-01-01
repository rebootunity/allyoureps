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

    let divisionName = office.division.name;
    let officeTitle = office.name;
    let subtitle = '';

    if (officeTitle !== divisionName ||
      officeTitle !== undefined) {
      subtitle = <h4 className="subtitle office-name">{officeTitle}</h4>;
    }

    return (
      <ul className="offices usa-accordion ">
        <li className="office " data-office={officeTitle}>
            {subtitle}
            <ul className="officials ">
              {this.renderOfficials(office.officials)}
            </ul>
        </li>
      </ul>
    );
  }
}
export default RenderOffice;
