import React from 'react';
import HeroLG from './img/hero-img-alt-lg.jpg';
import HeroMD from './img/hero-img-alt-md.jpeg';
import HeroSM from './img/hero-img-alt-sm.jpeg';

class SiteHero extends React.Component {
  render() {
    return (
      <div className="site-hero aspect-ratio-box ratio16_9">
        <picture className="site-hero-image">
          <source media="(min-width: 1200px)" srcSet={HeroLG} />
          <source media="(min-width: 800px)" srcSet={HeroMD} />
          <source media="(min-width: 320px)" srcSet={HeroSM} />
          <img srcSet={HeroSM} alt="American flag"/>
        </picture>
        <div className="site-hero-display content">
          <p className="site-hero-copy darkbg headline"></p>
        </div>
        <div className="content caption darkbg hero-caption">Photo by John Bakator on Unsplash</div>
      </div>
    )
  }
}
export default SiteHero
