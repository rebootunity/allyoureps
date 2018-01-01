import React from 'react';

class SiteFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div class="white-card content">
          <p>Built with the <a href="https://developers.google.com/civic-information/" target="_blank" rel="noopener noreferrer" title="Google API website for developers">Google Civic Information API</a> and <a href="http://votinginfoproject.org/" target="_blank" rel="noopener noreferrer" title="Voting Information Project website">Voting Information Project</a> to find elected officials for any U.S. residential address at federal, state, and <strong>local</strong> levels.</p>
          <p>Results may include phone number, office address, and social media channels. Data is drawn from Google&#8217;s API. More information can be found on the <a href="https://developers.google.com/civic-information/docs/ci_forum" target="_blank" rel="noopener noreferrer">support site.</a></p>
        </div>
      </footer>
    )
  }
}
export default SiteFooter
