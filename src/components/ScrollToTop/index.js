import {Component} from 'react'
import {withRouter} from 'react-router-dom'

// 作用： 解决路由切换后，滚动条不自动置顶的情况
class index extends Component {
  componentDidUpdate(prevProps){
    if(this.props.location.pathname !== prevProps.location.pathname){
      window.scrollTo(0,0)
    }
  }
  render() {
    return this.props.children
  }
}

export default withRouter(index);