import React from 'react';

class Styleguide extends React.Component {
  render() {
    let visible = this.props.visible;
    if (visible === "true") {
      return (
        <div>
          <h1>Typography as divs</h1>
          <div class="headline">Headline</div>
          <div class="lead">Lead</div>
          <div class="title">Title</div>
          <div class="subtitle">Subtitle</div>
          <div>Body</div>
          <div class="body--alt">Body alt/menu</div>
          <div class="caption">Caption</div>
          <div class="button">Button</div>
          <hr/>
          <h1>Typography as elements</h1>
          <h1 class="headline">H1 headline</h1>
          <h1 class="title">H1 title</h1>
          <h2 class="title">H2 Title</h2>
          <h3 class="subtitle">H3 Subtitle</h3>
          <p>P body</p>
          <p class="body--alt">P body alt/menu</p>
          Caption
          <button>Button</button>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}
export default Styleguide;
