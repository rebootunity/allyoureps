import React from 'react';
import RenderDivision from './RenderDivision';

class CivicLoader extends React.Component {

  getOffices(div) {
    console.log(div);
    const officeIndices = div.officeIndices;
    const offices = this.props.offices;
    if (officeIndices !== undefined) {
      let array = officeIndices.map((o) => offices[o]);
      return array;
    } else {
      return []
    }
  }

  render() {
    const divisions = Object.values(this.props.divisions);
    return (
      <section className="divisions">
        {divisions.map((div,i) =>
          <RenderDivision
            key={i.toString()}
            division={div}
            offices={this.getOffices(div)}
            officials={this.props.officials} />
        )}
      </section>
    );
  }
}
export default CivicLoader;
