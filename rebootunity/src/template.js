import React from 'react';

class template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: Date.now().toString()
    }
  }

  render() {
    let item = this.props.item !== undefined ? this.props.item : '';
    if (item.length > 0) {
      return item.map((thing,i) =>
            <template key={(thing)}/>);
    } else {
      return null;
    }
  }
}
export default template
