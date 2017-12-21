import React, { Component } from 'react';
import './App.css';
import OfficialList from './Official'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
      console.log("Data begot");
      that.setState({data: data.officials.map((o) => o)});
    }).catch(function(error) {
      console.log(error);
    });
  }


  render() {
    
    return (
      <div className="App">
        <input type="submit" onClick={() => this.getData()}/>
        <OfficialList officials={this.state.data}/>
      </div>
    );
  }
}

export default App;
