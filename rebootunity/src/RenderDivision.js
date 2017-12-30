import React from 'react';
import RenderOffice from './RenderOffice'

class RenderDivision extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      division: {}
    };
  }

  renderOffices(offices) {
    return offices.map((o,i) =>
      <RenderOffice key={i.toString()} office={o} />
    )
  }

  render() {
    // console.log("Rendering a division");
    const divisionID = this.props.division;
    const offices = this.props.offices;
    let levelName = this.props.level;

    return (
        <li className={"division " + divisionID}>
          <h3 className="division-name headline">{this.props.offices[0].division.name}</h3>
          {this.renderOffices(offices)}
        </li>

    );
  }
}
export default RenderDivision;
