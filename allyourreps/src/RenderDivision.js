import React from 'react';
import RenderOffice from './RenderOffice'

class RenderDivision extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      division: {}
    };
  }

  renderOffices(offices,level) {
    return offices.map((o,i) =>
      <RenderOffice key={i.toString()} office={o} level={level} />
    )
  }

  render() {
    // console.log("Rendering a division");
    const level = this.props.level;
    const divisionID = this.props.division;
    const offices = this.props.offices;
    let divisionName = this.props.offices[0].division.name;

    if (divisionID === 'ocd-division/country:us') {
      divisionName = 'United States Federal Level'
    }

    return (
        <li className={"white-card division " + divisionID}>
          <h3 className="title division-name">{divisionName}</h3>
          {this.renderOffices(offices,level)}
        </li>

    );
  }
}
export default RenderDivision;
