import React from 'react';

class SiteHeader extends React.Component {
  render() {
    return (
      <header className="header-top-bar">
        <h1 className="logo">
          <i className="material-icons">star</i>
          <em>All Your Reps</em>
          <i className="material-icons">star</i>
        </h1>
        <p className="site-hero-copy subtitle">Saving you the legwork <br/>So you can focus on the issues</p>
      </header>
    )
  }
}
export default SiteHeader
