import React, { Component } from 'react'
import { Row, Col, Icon, Tag } from 'antd'

import Card from '../../components/Card/Card.js'
import Aside from '../aside'

import * as service from '../../api/article'
import marked from '../../utils/marked';
import 'highlight.js/styles/xcode.css';

import './index.scss'
import './marked.scss'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {

      }
    };
  }

  componentDidMount() {
    this.getDetails()
  }

  // 获取文章详情
  getDetails = () => {
    const params = {
      userId: 1,
      articleId: this.props.match.params.id,
      type: 'details'
    }
    service.articleDetails(params).then(res => {
      let response = JSON.parse(JSON.stringify(res.data.data))
      this.setState((state) => {
        return {
          details: response
        }
      })
    })
  }
  render() {
    return (
      <div className="container">
        <div className="article-panel left">
          <Card>
            <h1 className="title">{this.state.details.title}</h1>

            <div className="article-info clear">
              <div className="avatar left">
                <img alt="作者头像" src={require('../../static/images/info-avatar.jpg')} />
              </div>

              <div className="info left">
                <div className="author">{this.state.details.username}</div>
                <div className="meta">
                  <span title="创建时间">{this.state.details.create_time}</span>
                  <span>阅读 {this.state.details.read_times}</span>
                  <span>字数 {this.state.details.numbers}</span>
                  <span>喜欢 {this.state.details.praise}</span>
                </div>
              </div>
              <div className="article-tag">
                <Tag color="green">{this.state.details.tags}</Tag>
              </div>

            </div>

            <div id="content" dangerouslySetInnerHTML={{ __html: this.state.details.content ? marked(this.state.details.content) : null }}>

            </div>

          </Card>
        </div>
      </div>
    );
  }
}

// const index = ({match}) => {
//   return (
//     <div>ID: {match.params.id}</div>
//   )
// }
export default index;