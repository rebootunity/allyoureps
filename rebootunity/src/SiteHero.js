import React from 'react';
import HeroLGMin from './img/hero-img-lg_min.jpeg';
import HeroMDMin from './img/hero-img-md_min.jpeg';
import HeroSMMin from './img/hero-img-sm_min.jpeg';

class SiteHero extends React.Component {
  render() {
    return (
      <div className="site-hero aspect-ratio-box ratio16_9">
        <picture className="site-hero-image">
          <source media="(min-width: 1200px)" srcSet={HeroLGMin} />
          <source media="(min-width: 640px)" srcSet={HeroMDMin} />
          <source media="(min-width: 320px)" srcSet={HeroSMMin} />
          <img srcSet={HeroSMMin} alt="American flag"/>
        </picture>
        <div className="site-hero-display content">
          <p className="display-text darkbg">One source to contact <br/><em>all</em> of your elected officials</p>
        </div>
        <div className="content caption darkbg hero-caption tinytext">Photo by Lucas Sankey on Unsplash</div>
      </div>
    )
  }
}
export default SiteHero
