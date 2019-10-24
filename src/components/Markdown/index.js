import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { highlightAll } from 'prismjs/prism';
import CodeBlock from './components/CodeBlock';
import ImageRenderer from './components/ImageRenderer';
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs/themes/prism.css';
import 'github-markdown-css';
import './prismjs/prism.css';

export class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  componentDidMount() {
    highlightAll();
  }

  componentDidUpdate(prevProps) {
    highlightAll();
  }

  render() {
    return (
      <ReactMarkdown
        source={this.props.source}
        renderers={{
          renderers: CodeBlock,
          image: ImageRenderer,
        }}
      />
    );
  }
}

export default Markdown;
