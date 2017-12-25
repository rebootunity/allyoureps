import React from 'react';
import HeroLG from './img/hero-img-lg.jpeg';
import HeroMD from './img/hero-img-md.jpeg';
import HeroSM from './img/hero-img-sm.jpeg';
import HeroLGMin from './img/hero-img-lg-min.jpeg';
import HeroMDMin from './img/hero-img-md-min.jpeg';
import HeroSMMin from './img/hero-img-sm-min.jpeg';

class SiteHero extends React.Component {
  render() {
    return (
      <div className="site-hero aspect-ratio-box ratio16_9">
        <picture class="site-hero-image">
          <source media="(min-width: 1200px)" srcset={HeroLGMin} />
          <source media="(min-width: 800px)" srcset={HeroMDMin} />
          <source media="(min-width: 320px)" srcset={HeroSMMin} />
          <img src={HeroSMMin} alt="Photo of the American flag"/>
        </picture>
        <div className="site-hero-display content">
          <p className="display-text darkbg">One source to find <em>all</em> of your elected officials</p>
          <h1 className="subtitle darkbg">Find Every representative<br/>at <span className="underline-effect"><strong>every level</strong></span> of government
          </h1>
        </div>
        <caption className="darkbg tinytext">Photo by Lucas Sankey on Unsplash</caption>
      </div>
    )
  }
}
export default SiteHero
