import React from 'react';
import RenderOfficial from './RenderOfficial';

class CivicLoader extends React.Component { 
  
  mergeOfficesAndOfficials() {
    let offices = this.props.offices;
    let officials = this.props.officials;
    let newOffices = {};

    for (var key in offices) {
      if (offices.hasOwnProperty(key)) {
        newOffices[key] = offices[key];
        let indices = offices[key].officialIndices;
        for (var i = 0; i < indices.length; i++) {
          let officialIndex = indices[i];
          newOffices["official"+i] = officials[officialIndex];
        }
      }
    }
    return newOffices;
  }
  
  mergeDivisionsAndOffices(offices) {
    let divisions = this.props.divisions;
    let newDivisions = {};

    for (var key in divisions) {
      if (divisions.hasOwnProperty(key)) {
        newDivisions[key] = divisions[key];
        let indices = divisions[key].officeIndices;
        for (var i = 0; i < indices.length; i++) {
          let officeIndex = indices[i];
          newDivisions["office"+i] = offices[officeIndex];
        }
      }
    }
    return newDivisions;
  }
  
  mergeData() {
    let offices = this.props.offices;
    let officials = this.props.officials;
    let divisions = this.props.divisions;
    let mergedData = [];
    
    let mergedOffices = this.mergeOfficesAndOfficials();
    let mergedDivisions = this.mergeDivisionsAndOffices(mergedOffices);
    // raw data structure requires much looping to match up divisions, offices,
    // and officials
    
    for (var key in mergedDivisions) {
      if (mergedDivisions.hasOwnProperty(key)) {
        mergedData.push(mergedDivisions[key])
      }
    }

    console.log(divisions);
    
    
    return mergedData;
  }
  
  renderOfficials(officials) {
    console.log(officials);
    return officials.map((o,i) => <RenderOfficial key={i.toString()} official={o}/>)
  }

  render() {
    let mergedData = this.mergeData();
    return (
      <ul className="officials">
        {this.renderOfficials(mergedData)}
      </ul>
    );
  }
}
export default CivicLoader;