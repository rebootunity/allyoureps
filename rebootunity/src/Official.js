import React from 'react';
import Profile from './Profile';

class OfficialList extends React.Component {  

  render() {

    return (
      <ul>
        {this.props.officials.map((o) => 
            <Profile 
              key={o.name} 
              name={o.name}
              party={o.party}
              photoUrl={o.photoUrl}
            />
        )}
      </ul>
    );
  }
}
export default OfficialList;