import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd'

import Card from '../../components/Card/Card.js'
import Aside from '../aside'
import './index.scss'

import * as service from '../../api/article'
import marked from '../../utils/marked';
import 'highlight.js/styles/xcode.css';


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleDetails: {

      }
    };
  }

  componentDidMount() {
    this.getDetails()
  }

  // 获取文章详情
  getDetails = () => {
    const params = {
      id: this.props.match.params.id
    }
    service.articleDetails(params).then(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.setState((state) => {
        return {
          articleDetails: response
        }
      })
    })
  }
  render() {

    return (
      <div>
        <div className="article-panel left">
          <Card>
            <Row>
              <Col span={12}>
                <div className="info-list">
                  <span title='最后修改时间' className="info-item">
                    <Icon type="calendar" />
                    <span>{this.state.articleDetails.createTime}</span>
                  </span>
                  <span title='分类' className="info-item">
                    <Icon type="folder" />
                    <span>{this.state.articleDetails.category}</span>
                  </span>
                  {/* <span title='标签' className="info-item">
                    <Icon type="tags" />
                    <span>{this.state.articleDetails.tag}</span>
                  </span> */}
                </div>
              </Col>
            </Row>
            <div id="markdown-article" dangerouslySetInnerHTML={{ __html:  this.state.articleDetails.content ? marked(this.state.articleDetails.content) : null }}>

            </div>
          </Card>
        </div>
        <Aside className="left" />
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