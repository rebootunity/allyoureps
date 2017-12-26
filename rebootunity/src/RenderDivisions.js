import React from 'react';
import RenderDivision from './RenderDivision';


class RenderDivisions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      level: '',
    }
  }

  renderDivisions() {
    const divisions = this.props.divisions;

    var values = [];
    for (var i = 0; i < divisions.length; i++) {
      let div = divisions[i];
      values.push(<RenderDivision division={div} key={i.toString()} offices={this.props.offices} officials={this.props.officials} />);
    }
    return values.join('');
  }

  render() {
console.log("divisions");
console.log(this.props);
    return (
      <div className="results content">
        {this.renderDivisions()}
      </div>
    );
  }
}
export default RenderDivisions;
