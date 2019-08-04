import React, {Component} from 'react';
import { Tag} from 'antd';

import Card from '../../components/Card/Card.js';
import Catelog from './catalog/index'
// import Aside from '../aside';

import * as service from '../../api/article';
import markdown from '../../utils/markdown.js';
import 'highlight.js/styles/atom-one-dark.css';

import './index.scss';
import './marked.scss';

class index extends Component {
  constructor (props) {
    super (props);
    this.state = {
      details: {},
    };
  }

  componentDidMount () {
    this.getDetails ();
  }

  // 获取文章详情
  getDetails = () => {
    const params = {
      userId: 1,
      articleId: this.props.match.params.id,
      type: 'details',
    };
    service.articleDetails (params).then (res => {
      const detail = res.data.data;
      const article = markdown.marked(res.data.data.content);

      article.then(response => {
        detail.content = response.content;
        detail.toc = response.toc;
        console.log('detail.toc :', detail.toc);

        this.setState (state => {
          return {
            details: detail
          };
        });
      });


      
    });
  };
  render () {
    const details = this.state.details
    const toc = details.toc

    return (
      <div className="container clear">
        <div className="article-panel left">
          <Card>
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
                  <span title="创建时间">{details.create_time}</span>
                  <span>阅读 {details.read_times}</span>
                  <span>字数 {details.numbers}</span>
                  <span>喜欢 {details.praise}</span>
                </div>
              </div>
              <div className="article-tag">
                <Tag color="green">{details.tags}</Tag>
              </div>

            </div>

            <div
              id="content"
              dangerouslySetInnerHTML={{
                __html: details.content
              }}
            />

          </Card>
        </div>
        <div className="catalog-panel left">
          {
            toc ? (<Catelog toc={toc}/>) : ''
          }
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
