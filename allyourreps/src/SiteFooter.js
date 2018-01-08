import React from 'react';

class SiteFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="white-card content">
          <h2 className="title">About the data</h2>
          <p>Results may include more than just name and office; some results include phone number, office address, website, and social media channels.</p>
          <p>Data is drawn from the <a href="https://developers.google.com/civic-information/" target="_blank" rel="noopener noreferrer" title="Google API website for developers">Google Civic Information API</a> in partnership with the <a href="http://votinginfoproject.org/" target="_blank" rel="noopener noreferrer" title="Voting Information Project website">Voting Information Project</a>.</p>
          <h3 className="subhead">Find something wrong?</h3>
          <p>Data is collected by the  drawn from Google&#8217;s API. More information can be found on their <a href="https://developers.google.com/civic-information/docs/ci_forum" target="_blank" rel="noopener noreferrer">support site.</a></p>
        </div>
        <div className="white-card content">
          <h2 className="title">About this site</h2>
          <p>This is an open-source software project aimed at boosting political engagement among American citizens.</p>
          <p>Technology has lagged behind in serving one of the most important groups in America: the people of America.</p><p>This site is an effort to modernize politics and make engagement as uncomplicated as possible.</p>
        </div>
        <small className="content caption">&copy; Copyright 2017 <a href="https://jannypie.github.io" target="_blank" rel="noopener noreferrer">Jan Dennison Humphries</a></small>
      </footer>
    )
  }
}
export default SiteFooter
