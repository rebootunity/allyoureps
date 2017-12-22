import React from 'react';
import Official from './Official';

class OfficeLoader extends React.Component { 
  
  mergeData() {
    let offices = this.props.offices;
    let officials = this.props.officials;
    let mergedData = [];

    for (var i = 0; i < offices.length; i++) {
      let office = offices[i];
      for (var n = 0; n < office.officialIndices.length; n++) {
        let officialIndex = office.officialIndices[n];
        let official = officials[officialIndex];
        mergedData.push({
          position: office.name,
          level: office.levels || 'local',
          name: official.name,
          party: official.party
        })
      }
    }
    return mergedData;
  }
  
  handleOfficials(officials) {
    return officials.map((o,i) => <Official key={i.toString()} official={o}/>)
  }

  render() {
    let mergedData = this.mergeData();
    console.log(mergedData);
    return (
      <ul className="officials">
        {this.handleOfficials(mergedData)}
      </ul>
    );
  }
}
export default OfficeLoader;