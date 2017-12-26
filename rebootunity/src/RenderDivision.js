import React from 'react';
import RenderOffice from './RenderOffice'

class RenderDivision extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      division: {}
    };
  }

  getOfficials(div) {
    const officialIndices = div.officialIndices;
    const officials = this.props.officials;
    if (officialIndices !== undefined) {
      let array = officialIndices.map((o) => officials[o]);
      return array;
    }
  }
  render() {
    console.log("division");
    console.log(this);
    const offices = this.props.offices;
    return (
      <ul className="offices">
        {offices.map((office,i) =>
          <RenderOffice
            key={i.toString()}
            office={office}
            officials={this.getOfficials(office)} />
        )}
      </ul>
    );
  }
}
export default RenderDivision;
