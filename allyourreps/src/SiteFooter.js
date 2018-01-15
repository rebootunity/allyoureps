import React from 'react';

class SiteFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="white-card content">
          <h2 className="title">About this site</h2>
          <p>This is an open-source software project aimed at boosting political engagement among American citizens.</p>
          <p>Technology has lagged behind in serving one of the most important groups in America: the people of America.</p><p>This site is an effort to modernize politics and make engagement as uncomplicated as possible.</p>
        </div>
        <small className="content caption">&copy; Copyright 2018 <a href="https://jannypie.github.io" target="_blank" rel="noopener noreferrer">Jan Dennison Humphries</a></small>
      </footer>
    )
  }
}
export default SiteFooter
