import React from 'react';
import RenderDivision from './RenderDivision';

class CivicLoader extends React.Component { 
  
  mergeOfficesAndOfficials() {
    let officesData = this.props.offices;
    let officialsData = this.props.officials;
    let newOffices = {};
    // here we match up all officials with their office
    for (var key in officesData) {
      newOffices[key] = officesData[key];
      // for each new office, add an officials property
      newOffices[key]["officials"] = [];
      // this is the tricky part of this API
      // 'office' objects have an array 'officialIndices', referring to the
      // index(indices) of the person(s) in the 'officials' data object
      let indices = officesData[key].officialIndices;
      // get all of the officials for this office
      for (var i = 0; i < indices.length; i++) {
        let officialIndex = indices[i];
        // this creates a new array in the current office under key "officials"
        // items should be pushed rather than set to overwrite each previous
        newOffices[key]["officials"].push(officialsData[officialIndex]);
      }
    }
    return newOffices;
  }
  
  mergeDivisionsAndOffices(offices) {
    let divisions = this.props.divisions;
    let newDivisions = {};

    for (var key in divisions) {
      newDivisions[key] = divisions[key];
      newDivisions[key]["offices"] = [];
      let indices = divisions[key].officeIndices;
      for (var i = 0; i < indices.length; i++) {
        let officeIndex = indices[i];
        newDivisions[key]["offices"].push(offices[officeIndex]);
      }
    }
    return newDivisions;
  }
  
  mergeData() {
    // the API structure doesn't directly match up divisions, offices,
    // and officials, so we create a new object structure that will be easier 
    // to handle in our components
    let mergedDataByDivision = [];
    // first match up officials with their offices
    let mergedOffices = this.mergeOfficesAndOfficials();
    // then match those offices with their divisions
    let mergedDivisions = this.mergeDivisionsAndOffices(mergedOffices);
    // convert final object to array
    for (var key in mergedDivisions) {
      mergedDataByDivision.push(mergedDivisions[key]);
    }
    return mergedDataByDivision;
  }
  
  renderDivisions(data) {
    console.log("Rendering divisions");
    console.log(data);
    return data.map((d,i) => <RenderDivision key={i.toString()} division={d}/>);
  }
  
  testData() {
    let divisions = this.props.divisions;
    let offices = this.props.offices;
    let officials = this.props.officials;
    
    for (var key in divisions) {
      if (divisions.hasOwnProperty(key)) {
        let indices = divisions[key].officeIndices;
        for (var i = 0; i < indices.length; i++) {
          let officeIndex = indices[i];
          offices[officeIndex].division = divisions[key];
        }
      }
    }
    for (var key in offices) {
      if (offices.hasOwnProperty(key)) {
        let indices = offices[key].officialIndices;
        for (var i = 0; i < indices.length; i++) {
          let officialIndex = indices[i];
          officials[officialIndex].division = offices[key];
        }
      }
    }
    return [officials];
  }
  
  render() {
    let mergedDataByDivision = this.mergeData();
    return (
      <section className="divisions">
        {this.renderDivisions(mergedDataByDivision)}
      </section>
    );
  }
}
export default CivicLoader;