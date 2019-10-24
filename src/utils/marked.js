/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-29 17:16:52
 * @LastEditTime: 2019-10-19 18:51:53
 * @LastEditors: Please set LastEditors
 */
import marked from 'marked';
import hljs from 'highlight.js/lib/highlight';

marked.setOptions ({
  renderer: new marked.Renderer (),
  highlight: function (code) {
    return require ('highlight.js').highlightAuto (code).value;
  },
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: 'heading-',
  langPrefix: 'language-',
  mangle: true,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  xhtml: false,
});

export default marked;
