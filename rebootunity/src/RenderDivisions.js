import React from 'react';
import RenderDivision from './RenderDivision';


class RenderDivisions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getDivision(office,divisions) {
    let divID = office.divisionId;
    office["division"] = divisions[divID];
    return office;
  }

  renderDivision(offices,level) {
    let officesByDivision = {};
    for (var i = 0; i < offices.length; i++) {
      let office = offices[i];
      let officeDivisionId = office.divisionId;
      if (!officesByDivision.hasOwnProperty(officeDivisionId)) {
        officesByDivision[officeDivisionId] = []
      }
      officesByDivision[officeDivisionId].push(office);
    }
    let hold = [];
    for (var key in officesByDivision) {
      let division = officesByDivision[key];
      hold.push(<RenderDivision key={key.toString()} division={key.toString()} offices={Object.values(division)} level={level} />)
    }

    return hold;
  }
  render() {
    // console.log("Rendering divisions");
    const offices = this.props.offices;
    const level = this.props.level;

    return (
      <ul className={"level " + level}>
        {this.renderDivision(offices,level)}
      </ul>
    );
  }
}
export default RenderDivisions;
