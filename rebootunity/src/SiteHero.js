import React from 'react';
import HeroLG from './img/hero-img-alt-lg.jpg';
import HeroMD from './img/hero-img-alt-md.jpg';
import HeroSM from './img/hero-img-alt-md.jpg';

class SiteHero extends React.Component {
  render() {
    return (
      <div className="site-hero aspect-ratio-box ratio16_9">
        <picture className="site-hero-image">
          <source media="(min-width: 1200px)" srcSet={HeroLG} />
          <source media="(min-width: 640px)" srcSet={HeroLG} />
          <source media="(min-width: 320px)" srcSet={HeroLG} />
          <img srcSet={HeroLG} alt="American flag"/>
        </picture>
        <div className="site-hero-display content">
          <p className="site-hero-copy darkbg headline">All Your Reps</p>
        </div>
        <div className="content caption darkbg hero-caption">Photo by John Bakator on Unsplash</div>
      </div>
    )
  }
}
export default SiteHero
