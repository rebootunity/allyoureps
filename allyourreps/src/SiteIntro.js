import React from 'react';

class SiteIntro extends React.Component {
  render() {
    return (
      <section className="intro white-card content">
        <h2 className="title"><em>all</em> levels of government, even local</h2>
        <p><strong>All Your Reps</strong> takes the work out of finding your elected officials, so that you can focus on the issues.</p>
        <p>Finding your elected officials requires visiting different websites, knowing district borders, and even what offices there are to fill. Often it feels like stumbling in the dark.</p>
        <p>Here you can search for your elected representatives at all levels, all in one spot. You will find names, addresses, phone numbers, and social media accounts. Bookmark it, print it, send it to your email -- whatever works best for you!</p>
        <h3 className="title">About your results</h3>
        <p>Data is drawn from the <a href="https://developers.google.com/civic-information/" target="_blank" rel="noopener noreferrer" title="Google API website for developers">Google Civic Information API</a> in partnership with the <a href="http://votinginfoproject.org/" target="_blank" rel="noopener noreferrer" title="Voting Information Project website">Voting Information Project</a>.</p>
        <p>Data for your results Results may include more than just name and office; some results include phone number, office address, website, and social media channels.</p>

        <h3 className="subhead">Find something wrong?</h3>
        <p>Data is collected by the  drawn from Google&#8217;s API. More information can be found on their <a href="https://developers.google.com/civic-information/docs/ci_forum" target="_blank" rel="noopener noreferrer">support site.</a></p>
      </section>
    )
  }
}
export default SiteIntro
