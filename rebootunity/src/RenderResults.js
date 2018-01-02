import React from 'react';
import RenderDivisions from './RenderDivisions';

class RenderResults extends React.Component {

  /**
    * Data structure:
    * {
        props.divisions: {
                          divisionId: {
                                      name:
                                      officeIndices: []
                                      }
                        },
        props.offices: [{
                          name:
                          divisionId:
                          division: props.divisions[divisionId]
                          levels: []
                          officialIndices: []
                          officials: [loop over officialIndices, return officials]
                        }],
        props.officials: [{
                            name:
                            address:
                            party:
                            photoUrl:
                            urls:
                            phones:
                            channels:
                          }]
      }
    *
  **/

  getDivision(office,divisions) {
    let divID = office.divisionId;
    office["division"] = divisions[divID];
    return office;
  }

  getOfficials(office,officials) {
    let officialIndices = office.officialIndices;
    if (officialIndices.length > 0) {
      let newOfficials = officialIndices.map((oIndex) => officials[oIndex]);
       office["officials"] = newOfficials;
       return office;
    } else {
      // office with no officials
      office["officials"] = [];
      return office;
    }
  }

  renderLevels(officesbylevel) {
    let hold = [];
    for (var key in officesbylevel) {
      let level = officesbylevel[key];
      hold.push(<RenderDivisions key={key.toString()} level={key.toString()} offices={Object.values(level)} />)
    }
    return hold;
  }

  render() {
    console.log("RenderResults:",this.props);
    const {offices,officials,divisions} = this.props;
    let officesByLevel = {local: []};

    for (var i = 0; i < offices.length; i++) {
      let office = offices[i];
      let officeDiv = this.getDivision(office,divisions);
      let officeOfficials = this.getOfficials(officeDiv,officials);
      let matchedUpOffice = officeOfficials;

      if (matchedUpOffice.levels !== undefined && matchedUpOffice.levels.length > 0) {
        let levelname = matchedUpOffice.levels[0];
        if (!officesByLevel.hasOwnProperty(levelname)) {
          officesByLevel[levelname] = []
        }
        officesByLevel[levelname].push(office);
      } else {
        officesByLevel["local"].push(office);
      }
    }

    return (
      <section className="results">
        {this.renderLevels(officesByLevel)}
      </section>
    );
  }
}
export default RenderResults;
