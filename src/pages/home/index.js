import React, { Component } from "react";
import { Link } from "react-router-dom"
import * as service from "../../api/article";

import "./index.scss";
import Card from '../../components/Card/Card.js'
import { List, Icon } from 'antd'
import Aside from '../aside'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList: []
    }
  }

  componentDidMount() {
    this.getArticle()
  }

  getArticle = () => {
    const params = {
      // userId: this.userId
      userId: 1,
      type: 'list'
    }
    service.getArticles(params).then(res => {
      if(res.data.data.length>0){
        this.setState({articleList: res.data.data})
      }
    })
  }

  render() {
    return (
      <div className="container clear">
        <div className="main left">
          <Card>
            <List className="pageList">
              {
                this.state.articleList.map(v => {
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
                  )
                })
              }
            </List>
          </Card>
        </div>
        <Aside />
      </div>
    );
  }
}

export default Index;
