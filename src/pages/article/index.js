import React, {Component} from 'react';
import {Tag, Skeleton, Affix} from 'antd';

import Card from '../../components/Card/Card.js';

import * as service from '../../api/article';

import './index.scss';

import Markdown from '../../components/Markdown';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

class index extends Component {
  constructor (props) {
    super (props);
    this.state = {
      details: {},
      loading: true,
    };
  }

  componentDidMount () {
    this.getDetails ();
  }

  // 获取文章目录
  getCatalog (html) {}

  // 获取文章详情
  getDetails = () => {
    const params = {
      userId: 1,
      articleId: this.props.match.params.id,
      type: 'details',
    };
    service.articleDetails (params).then (res => {
      const detail = res.data.data;

      this.setState (state => {
        return {
          loading: false,
          details: detail,
        };
      });
    });
  };

  render () {
    const {loading, details} = this.state;

    return (
      <div className="container clear">

        <div className="article-panel left">
          <Card>
            {!loading &&
              <div>
                <h1 className="title">{details.title}</h1>
                <div className="article-info clear">
                  <div className="avatar left">
                    <img
                      alt="作者头像"
                      src={require ('../../static/images/info-avatar.jpg')}
                    />
                  </div>

                  <div className="info left">
                    <div className="author">{details.username}</div>
                    <div className="meta">
                      <span title="">发布时间：{details.create_time} </span>
                      <span>阅读： {details.read_times} </span>
                      <span>字数： {details.numbers} </span>
                      <span>喜欢： {details.praise} </span>
                    </div>
                  </div>
                  <div className="article-tag">
                    <Tag color="green">{details.tags}</Tag>
                  </div>

                </div>
                <div className="markdown-body">
                  <Markdown id="content" source={details.content} />
                </div>
              </div>}

            <Skeleton
              loading={this.state.loading}
              active
              avatar
              paragraph={{rows: 6}}
            />

          </Card>

        </div>
        <div className="article-toc left">
          <Affix offsetTop={74}>
            <MarkNav
              className="article-menu"
              source={details.content}
              ordered={false}
              headingTopOffset={74}
            />
          </Affix>
        </div>

      </div>
    );
  }
}

export default index;
