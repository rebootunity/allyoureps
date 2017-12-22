import React, { Component } from 'react';
import './App.css';
import OfficeLoader from './OfficeLoader'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      offices: [],
      officials: []
    };
  }
  
  getData(e,value) {
    e.preventDefault();
    console.log("Getting data...");
    const apiURL = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA5FeFdyz3-4oeX1X7qleN_VR17nXR90HA&includeOffices=true&address=' + value.toString();
    const apiURL2 = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA5FeFdyz3-4oeX1X7qleN_VR17nXR90HA&address=383+w+4th+ave+columbus+ohio+43201&includeOffices=true';
    const that = this;
    
    fetch(apiURL).then(function(response) { 
    	// Convert to JSON
    	return response.json();
    }).then(function(data) {
      console.log("Data begot:",data);
      that.setState({
        offices: data.offices.map((o,i) => o),
        officials: data.officials.map((o,i) => o)
      });
    }).catch(function(error) {
      console.log(error);
      return null;
    });
  }


  render() {
    let input;
    
    return (
      <div className="App">
        <form className="address-form">
          <input id="address" type="text" ref={node => {input = node}} placeholder="" required/>
          <input type="submit" onClick={(e) => {
            this.getData(e,input.value);
            input.value = '';
          }}/>
          <label htmlFor="address" className="address-label">Enter your address</label>
        </form>
        <OfficeLoader 
          officials={this.state.officials} 
          offices={this.state.offices} 
        />
      </div>
    );
  }
}

export default App;
