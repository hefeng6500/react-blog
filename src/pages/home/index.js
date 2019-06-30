import React, { Component } from "react";
import { Link } from "react-router-dom"
import * as server from "../../api/login";

import "./index.scss";
import Card from '../../components/Card/Card.js'
import { List, Icon } from 'antd'
import Aside from '../aside'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList: [
        { id: '1', title: '前端架构师亲述：前端工程师成长之路的 N 问 及 回答', viewTimes: 1061, comments: 0, praise: 98, createTime: '2019-06-30 20:09:28', category: '视频教程', tag: 'React', describe: '' },
        { id: '2', title: '前端架构师亲述：前端工程师成长之路的 N 问 及 回答', viewTimes: 1061, comments: 0, praise: 98, createTime: '2019-06-30 20:09:28', category: '视频教程', tag: 'React', describe: '' },
        { id: '3', title: '前端架构师亲述：前端工程师成长之路的 N 问 及 回答', viewTimes: 1061, comments: 0, praise: 98, createTime: '2019-06-30 20:09:28', category: '视频教程', tag: 'React', describe: '' },
      ]
    }
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
                    <List.Item key={v.id}>
                      <h3 className="h3-title">
                        <Link to={'/article/' + v.id}>{v.title}</Link>
                      </h3>
                      <p className="abstract">{v.title}</p>
                      <div className="meta">
                        <span>查看 {v.viewTimes}</span>
                        <span>评论 {v.comments}</span>
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
