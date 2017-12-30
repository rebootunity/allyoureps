import React, { Component } from 'react';
import './uswds.css';
import './App.css';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import SiteHero from './SiteHero';
import AddressForm from './AddressForm';
import RenderAddress from './RenderAddress';
import CivicLoader from './CivicLoader';
import Styleguide from './Styleguide';
import RenderResults from './RenderResults';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offices: [],
      officials: [],
      divisions: [],
      foundAddress: []
    };
  }

  getData(address) {
    console.log("Getting data...");

    const that = this;
    const apiURL = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyA5FeFdyz3-4oeX1X7qleN_VR17nXR90HA&includeOffices=true&address=' + address;

    fetch(apiURL).then(function(response) {
    	// Convert to JSON
    	return response.json();
    }).then(function(data) {
      that.setState({
        offices: data.offices.map((o) => o),
        officials: data.officials.map((o) => o),
        divisions: data.divisions,
        foundAddress: data.normalizedInput
      });
    }).catch(function(error) {
      console.log(error);
      return null;
    });
  }

  render() {

    return (
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content" className="App">
          <SiteHero />
          <AddressForm onFormSubmit={this.getData.bind(this)} />
          <RenderAddress addressFields={this.state.foundAddress} />
          <RenderResults
            divisions={this.state.divisions}
            officials={this.state.officials}
            offices={this.state.offices}
          />
          <Styleguide visible="false" />
        </main>
        <SiteFooter />
      </div>
    );
  }
}

export default App;
