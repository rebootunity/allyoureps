import React from 'react';
import SiteHero from './SiteHero';

class SiteHeader extends React.Component {
  render() {
    return (
      <header className="header-top-bar">
        <p className="logo">
          <em className="logo-text"><span>All </span><span>Your </span><span>Reps</span></em>
        </p>
        <SiteHero />
      </header>
    )
  }
}
export default SiteHeader
