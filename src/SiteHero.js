import React from 'react';
import HeroXL from './img/hero-images/sitebg-xl.jpg'; //2880
import HeroLG from './img/hero-images/sitebg-lg.jpg'; //1440
import HeroMD from './img/hero-images/sitebg-md.jpg'; //800
import HeroSM from './img/hero-images/sitebg-sm.jpg'; //420

class SiteHero extends React.Component {
  render() {
    return (
      <div className="site-hero aspect-ratio-box ratio16_9">
        <picture className="site-hero-image">
          <source media="(min-width: 2440px)" srcSet={HeroXL} />
          <source media="(min-width: 1440px)" srcSet={HeroXL} />
          <source media="(min-width: 801px)" srcSet={HeroLG} />
          <source media="(min-width: 420px)" srcSet={HeroMD} />
          <img srcSet={HeroSM} alt="American flag"/>
        </picture>
        <div className="content caption darkbg hero-caption">Photo by John Bakator on Unsplash</div>
      </div>
    )
  }
}
export default SiteHero
