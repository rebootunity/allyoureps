import React, { Component } from 'react';
import './uswds.css';
import './fonts/iconfont/material-icons.css';
import './App.css';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import AddressForm from './AddressForm';
import RenderAddress from './RenderAddress';
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

  scrollToResults() {
      let target = document.getElementById("js--scrollTarget");

      function animate(target, style, unit, from, to, time, prop) {
        if (!target) {
            return;
        }
        var start = new Date().getTime(),
            timer = setInterval(function () {
                var step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    target[style] = (from + step * (to - from))+unit;
                } else {
                    target.style[style] = (from + step * (to - from))+unit;
                }
                if (step === 1) {
                    clearInterval(timer);
                }
            }, 25);
        if (prop) {
              target[style] = from+unit;
        } else {
              target.style[style] = from+unit;
        }
      }
      animate(target || document.documentElement, "scrollTop", "", 0, target.offsetTop, 2000, true);
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

    this.scrollToResults();
  }

  render() {

    return (
      <div>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>
        <SiteHeader />
        <main id="main-content" className="App">
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
