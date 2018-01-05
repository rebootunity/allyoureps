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
      <div className="offices">
        <ul className="office " data-office={officeTitle}>
            {subtitle}
            <li className="officials">
              {this.renderOfficials(office.officials)}
            </li>
        </ul>
      </div>
    );
  }
}
export default RenderOffice;
