import React from 'react';
import RenderDivisions from './RenderDivisions';

class CivicLoader extends React.Component {

  render() {

    return (
      <section className="divisions">
        <RenderDivisions
          divisions={this.props.divisions}
          offices={this.props.offices}
          officials={this.props.officials} />
      </section>
    );
  }
}
export default CivicLoader;
