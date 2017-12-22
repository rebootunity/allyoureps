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
  
  getData() {
    console.log("Getting data...");
    const apiURL = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA5FeFdyz3-4oeX1X7qleN_VR17nXR90HA&address=383+w+4th+ave+columbus+ohio+43201&includeOffices=true';
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
    console.log(this.state);
    return (
      <div className="App">
        <input type="submit" onClick={() => this.getData()}/>
        <OfficeLoader 
          officials={this.state.officials} 
          offices={this.state.offices} 
        />
      </div>
    );
  }
}

export default App;
