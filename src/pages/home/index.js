import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Pagination, Icon, Skeleton} from 'antd';
import * as service from '../../api/article';

import './index.scss';
import Card from '../../components/Card/Card.js';
import {List} from 'antd';
import Aside from '../aside';

class Index extends Component {
  constructor (props) {
    super (props);
    this.state = {
      loading: true,
      articleList: [],
    };
  }

  componentDidMount () {
    this.getArticle ();
  }

  getArticle = () => {
    const params = {
      // userId: this.userId
      userId: 1,
      type: 'list',
    };
    service.getArticles (params).then (res => {
      if (res.data.data.length > 0) {
        this.setState ({
          articleList: res.data.data,
          loading: false,
        });
      }
    });
  };

  // 分页条数改变
  sizeChange = (current, pageSize) => {};

  render () {
    const {articleList, loading} = this.state;
    const IconText = ({type, text}) => (
      <span>
        <Icon type={type} style={{marginRight: 8}} />
        {text}
      </span>
    );

    return (
      <div className="container clear">
        <div className="main left">
          <Card>
            {/* <List className="pageList">
              {this.state.articleList.map (v => {
                return (
                  <List.Item key={v.article_id}>
                    <h3 className="h3-title">
                      <Link to={'/article/' + v.article_id}>{v.title}</Link>
                    </h3>
                    <p className="abstract">{v.title}</p>
                    <div className="meta">
                      <span>查看 {v.read_times}</span>
                      <span>评论 {v.comment_times}</span>
                      <span>赞 {v.praise}</span>
                      <span className="meta"> {v.createTime}</span>
                    </div>

                  </List.Item>
                );
              })}
            </List> */}

            {!loading
              ? <List
                  className="article-list"
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    sizeChange: page => {
                      console.log (page);
                    },
                    pageSize: 10,
                  }}
                  dataSource={articleList}
                  footer={
                    <div>
                      <b>ant design</b> footer part
                    </div>
                  }
                  renderItem={item => (
                    <List.Item
                      key={item.title}
                      actions={[
                        <IconText
                          type="star-o"
                          text={item.comment_times}
                          key="list-vertical-star-o"
                        />,
                        <IconText
                          type="like-o"
                          text={item.praise}
                          key="list-vertical-like-o"
                        />,
                        <IconText
                          type="message"
                          text={item.comment_times}
                          key="list-vertical-message"
                        />,
                      ]}
                    >
                      <List.Item.Meta
                        title={
                          <Link to={'/article/' + item.article_id}>
                            {item.title}
                          </Link>
                        }
                        description={item.title}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
              : <Skeleton active paragraph={{rows: 4}} />}

          </Card>
          {/* <Pagination
            className="pagination"
            showSizeChanger
            onShowSizeChange={this.sizeChange}
            defaultCurrent={3}
            total={500}
          /> */}
        </div>
        <Aside />
      </div>
    );
  }
}

export default Index;
