import React, { Component } from 'react'
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import Card from '../../components/Card/Card.js'

import './index.scss'
import 'simplemde/dist/simplemde.min.css';
import { Tag, Input, Tooltip, Icon, Checkbox, Radio, Select, Button, message } from 'antd';

import * as service from '../../api/article.js'


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: null,
      tags: ['javascript', 'html'],
      inputVisible: false,
      inputValue: '',
      category: ['HTML', 'CSS', 'JavaScript'],
      forms: '公开', // 发布形式
      formsList: ['公开', '私密']
    };
  }

  // 文章标签移除
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  };

  // 添加标签
  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  // 添加标签文字变化
  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  // 添加标签文字确认
  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  // 添加标签 refs
  saveInputRef = input => (this.input = input);



  // 初始化MarkDown
  initMarkdown = () => {
    this.setState((prevState, props) => {
      return {
        markdown: new SimpleMDE({
          element: document.getElementById('editor').childElementCount,
          autofocus: true,
          autosave: true,
          previewRender(plainText) {
            return marked(plainText, {
              renderer: new marked.Renderer(),
              gfm: true,
              pedantic: false,
              sanitize: false,
              tables: true,
              breaks: true,
              smartLists: true,
              smartypants: true,
              highlight(code) {
                return highlight.highlightAuto(code).value;
              },
            });
          }
        })
      }
    })
  }

  // 分类改变
  categoryChange = () => {

  }

  // 文章类型
  typeChange = (value) => {
    this.setState((state) => {
      return {
        type: value
      }
    })
  }

  // 发布形式
  radioChange = (e) => {
    this.setState((state) => {
      return {
        forms: e.target.value
      }
    })
  }

  // 发布博客
  publish = () => {
    const data = {
      title: this.state.title,
      content: this.state.markdown.value(),
      tags: this.state.tags,
      category: this.state.category,
      type: this.state.type,
      forms: this.state.forms
    }
    service.publish(data).then(res => {
      message.success('恭喜你，发布成功！');
    }).catch(err => {
      console.log(err)
      message.error('发布失败！');
    })
  }

  // 保存草稿
  saveDraft = () => {
    const data = {
      title: this.state.title,
      content: this.state.markdown.value(),
      tags: this.state.tags,
      category: this.state.category,
      type: this.state.type,
      forms: this.state.forms
    }
    service.saveDraft(data).then(res => {
      message.success('恭喜你，保存成功！');
    }).catch(err => {
      console.log(err)
      message.error('保存失败！');
    })
  }

  // 返回
  back = () => {

  }

  componentDidMount = () => {
    this.initMarkdown()
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const { Option } = Select;

    return (
      <div className="editor-page container">
        <Card>
          <div className="title">
            <input className="title-input" placeholder="请输入文章标题" />
          </div>
          <div title="添加与修改文章" width="1200px">
            <textarea id="editor" style={{ marginBottom: 20, width: 800 }} size="large" rows={6} />
          </div>
          <div>

            <div className="attrs">
              <span>文章标签： </span>
              {tags.map((tag, index) => {
                const isLongTag = tag.length > 20;
                const tagElem = (
                  <Tag color="blue" key={tag} closable={index > -1} onClose={() => this.handleClose(tag)}>
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                  </Tag>
                );
                return isLongTag ? (
                  <Tooltip title={tag} key={tag}>
                    {tagElem}
                  </Tooltip>
                ) : (
                    tagElem
                  );
              })}
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Tag onClick={this.showInput} color="blue">
                  <Icon type="plus" /> 添加标签
                </Tag>
              )}
            </div>

            <div className="attrs">
              <span>文章分类： </span>
              <Checkbox.Group options={this.state.category} defaultValue={['Apple']} onChange={this.categoryChange} />
            </div>

            <div className="attrs">
              <span>文章类型： </span>
              <Select defaultValue="原创" size="small" style={{ width: 120 }} onChange={this.typeChange}>
                <Option value="原创">原创</Option>
                <Option value="转载">转载</Option>
                <Option value="翻译" >翻译</Option>
              </Select>
            </div>
            <div className="attrs">
              <span>发布形式： </span>
              <Radio.Group onChange={this.radioChange} value={this.state.forms}>
                {
                  this.state.formsList.map((item, index) => {
                    return (
                      <Radio value={item} key={index}>{item}</Radio>
                    )
                  })
                }
              </Radio.Group>
            </div>
            <div className="btn-group">
              <Button onClick={this.publish} type="primary" className="btn">
                发布博客
              </Button>
              <Button type="primary" className="btn">
                保存草稿
              </Button>
              <Button className="btn">
                返回
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default index;