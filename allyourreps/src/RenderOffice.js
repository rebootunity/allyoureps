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
    let role = office.roles !== undefined ? office.roles[0] : '';
    let subtitle = '';

    if (role !== undefined && role !== '') {
      switch (role) {
        case 'headOfState':
          role = 'Head of State: The chief public representative of a government.'
          break;
        case 'headOfGovernment':
          role = 'Head of Government Body'
          break;
        case 'deputyHeadOfGovernment':
          role = ''
          break;
        case 'governmentOfficer':
          role = 'Government Officer'
          break;
        case 'executiveCouncil':
          role = 'Executive Council'
          break;
        case 'legislatorUpperBody':
          role = 'Legislative Upper Body'
          break;
        case 'legislatorLowerBody':
          role = 'Legislative Lower Body'
          break;
        case 'highestCourtJudge':
          role = 'Highest Court Judge'
          break;
        case 'judge':
          role = 'Judge'
          break;
        case 'schoolBoard':
          role = 'School Board'
          break;
        case 'specialPurposeOfficer':
          role = 'Special Purpose Officer'
          break;
        default:
          role = 'Elected Official'
      }
    }

    if (officeTitle !== divisionName ||
      officeTitle !== undefined) {
      subtitle = <h4 className="subtitle office-name">
                    {officeTitle}
                </h4>;
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
