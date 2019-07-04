import React, { Component } from 'react'
import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';
import Card from '../../components/Card/Card.js'

import './index.scss'
import 'simplemde/dist/simplemde.min.css';
import { Tag, Input, Tooltip, Icon, Checkbox, Radio, Select,Button  } from 'antd';



class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: null,
      tags: ['Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: '',
      category: ['HTML', 'CSS', 'JavaScript'],
      forms: ['公开', '私密']
    };
  }

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  componentDidMount() {
    this.initMarkdown()
  }

  initMarkdown() {
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

  categoryChange() {

  }

  // 文章类型
  typeChange(){

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
                  <Tag key={tag} closable={index > -1} onClose={() => this.handleClose(tag)}>
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
                <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                  <Icon type="plus" /> New Tag
                </Tag>
              )}
            </div>

            <div className="attrs">
              <span>文章分类： </span>
              <Checkbox.Group options={this.state.category} defaultValue={['Apple']} onChange={this.categoryChange} />
            </div>

            <div className="attrs">
              <span>文章类型： </span>
              <Select defaultValue="原创" style={{ width: 120 }} onChange={this.typeChange}>
                <Option value="原创">原创</Option>
                <Option value="转载">转载</Option>
                <Option value="翻译" >翻译</Option>
              </Select>
            </div>
            <div className="attrs">
              <span>发布形式： </span>
              <Radio.Group onChange={this.onChange} value={this.state.forms}>
                {
                  this.state.forms.map((item, index) => {
                    return (
                      <Radio value={item} key={index}>{item}</Radio>
                    )
                  })
                }
              </Radio.Group>
            </div>
            <div>
            <Button type="primary">
              发布博客
            </Button>
            <Button type="primary">
              保存草稿
            </Button>
            <Button>
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