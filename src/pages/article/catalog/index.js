import React, {Component} from 'react';
import Card from '../../../components/Card/Card.js';

// import '../../../css/reset.css'
import '../../../css/markdown.scss'
import './index.scss'


class index extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    const toc = this.props.toc;
    return (
      <div>
        <Card>
          <div
          className="catalog"
            dangerouslySetInnerHTML={{
              __html: toc,
            }}
          />
        </Card>
      </div>
    );
  }
}

export default index;
