import React, {Component} from 'react'
import marked from 'marked';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <div id="markdown-area">123</div>
        <div id="content-area"></div>
      </div>
    );
  }
}

export default index;