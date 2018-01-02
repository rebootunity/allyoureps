import React from 'react';
import SiteHero from './SiteHero';

class SiteHeader extends React.Component {
  render() {
    return (
      <header className="header-top-bar">
        <h1 className="logo">
          <em className="logo-text"><span>All </span><span>Your </span><span>Reps</span></em>
        </h1>
        <SiteHero />
      </header>
    )
  }
}
export default SiteHeader
