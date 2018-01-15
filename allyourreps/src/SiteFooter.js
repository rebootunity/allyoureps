import React from 'react';

class SiteFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="white-card content">
          <h2 className="title">About this site</h2>
          <p>This is an open-source software project focused on using technology to remove barriers to political engagement among American citizens.</p>
          <p>See the <a href="https://github.com/rebootunity/allyoureps/tree/master/allyourreps" title="code repository for this project">GitHub repo</a> for more information. Built with <a href="https://reactjs.org/" title="React JS">ReactJS</a>.</p>
        </div>
        <small className="content caption">&copy; Copyright 2018 <a href="https://jannypie.github.io" target="_blank" rel="noopener noreferrer">Jan Dennison Humphries</a></small>
      </footer>
    )
  }
}
export default SiteFooter
