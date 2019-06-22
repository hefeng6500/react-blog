import React, { Component } from "react";
import * as server from "../../api/login";

import "./index.scss";
import Card from '../../components/Card/Card.js'
import { List, Icon } from 'antd'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList: [
        { id: '1', title: 'React16免费视频教程（共28集）', createTime: '2019-06-20', category: '视频教程', tag: 'React', describe: '<p> 这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端免费视频教程，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。 </p> <p> 我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。 </p> <p> 目前课程正在更新中.......... </p>' },
        { id: '2', title: 'React16免费视频教程（共28集）', createTime: '2019-06-20', category: '视频教程', tag: 'React', describe: '<p> 这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端免费视频教程，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。 </p> <p> 我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。 </p> <p> 目前课程正在更新中.......... </p>' },
        { id: '3', title: 'React16免费视频教程（共28集）', createTime: '2019-06-20', category: '视频教程', tag: 'React', describe: '<p> 这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端免费视频教程，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。 </p> <p> 我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。 </p> <p> 目前课程正在更新中.......... </p>' },
        { id: '4', title: 'React16免费视频教程（共28集）', createTime: '2019-06-20', category: '视频教程', tag: 'React', describe: '<p> 这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端免费视频教程，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。 </p> <p> 我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。 </p> <p> 目前课程正在更新中.......... </p>' },
        { id: '5', title: 'React16免费视频教程（共28集）', createTime: '2019-06-20', category: '视频教程', tag: 'React', describe: '<p> 这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端免费视频教程，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。 </p> <p> 我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。 </p> <p> 目前课程正在更新中.......... </p>' },
        { id: '6', title: 'React16免费视频教程（共28集）', createTime: '2019-06-20', category: '视频教程', tag: 'React', describe: '<p> 这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端免费视频教程，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。 </p> <p> 我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。 </p> <p> 目前课程正在更新中.......... </p>' }
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="main left">
          <Card>
            <List className="pageList">
              {
                this.state.articleList.map(v => {
                  return (
                    <List.Item key={v.id}>
                      <h3 className="h3-title">
                        <a href="#1">{v.title}</a>
                      </h3>

                      <div className="info-list">
                        <span title="置顶" className="info-item">
                          <Icon type="vertical-align-top" />
                          <span>置顶</span>
                        </span>
                        <span title={v.createTime} className="info-item">
                          <Icon type="calendar" />
                          <span>{v.createTime}</span>
                        </span>
                        <span title={v.category} className="info-item">
                          <Icon type="folder" />
                          <span>{v.category}</span>
                        </span>
                        <span title={v.tag} className="info-item">
                          <Icon type="tags" />
                          <span>{v.tag}</span>
                        </span>
                      </div>

                      <div className="describe">
                        <img className="banner-desc" alt="img" src={require("../../static/images/react16_image.png")} />
                        <div dangerouslySetInnerHTML={{ __html: v.describe }} ></div>
                        <div className="more">
                          <a>阅读全文 ></a>
                        </div>
                      </div>
                    </List.Item>
                  )
                })
              }
            </List>
          </Card>
        </div>
        <aside className="aside right">
          <div className="right-card">
            <div className="info-card">
              <div className="info-card-header">
                <img className="info-avatar" alt="头像" src={require('../../static/images/info-avatar.jpg')} />
              </div>
              <div className="info-card-body">
                <div className="info-nickname">墨客行吟</div>
                <div className="info-desc">
                  向心求理，知行合一，一个永远在路上的修行者
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default Index;
