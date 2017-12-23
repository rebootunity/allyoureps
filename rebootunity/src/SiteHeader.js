import React from 'react';

class SiteHeader extends React.Component {
  render() {
    return (
      <header>
        <a className="usa-skipnav" href="#main-content">Skip to main content</a>

        <div className="title header-top-bar usa-logo">
          <em className="logo-text">Rep Finder</em>
        </div>
        <div className="subtitle logo-subtext"><strong>ALL</strong> your <strong>representatives</strong></div>
        <div className="subtitle logo-subtext">at <span className="underline-effect"><strong>every level</strong></span> of government
        </div>
      </header>
    )
  }
}
export default SiteHeader