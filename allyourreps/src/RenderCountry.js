import React from 'react';
import RenderOffice from './RenderOffice';

class RenderCountry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getDivisionsOffices() {

  }

  renderDivisions() {
    const divisions = this.props.divisions;
console.log(divisions);
    for (var i = 0; i < divisions.length; i++) {
      let div = divisions[i];
      let officials = this.props.officials.filter(person => person.divisionId == div);

    }
  }

  render() {
    console.log(this);
    return (
      <div className={'federal-level ' + (this.props.level || '')} >
        {this.renderDivisions()}
      </div>
    );
  }
}
export default RenderCountry;
