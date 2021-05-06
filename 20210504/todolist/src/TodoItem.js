import React, { Component } from 'react'
import PropTypes from 'prop-types';
class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const { content } = this.props
    return <div onClick={this.handleClick}>{content}</div>
  }

  handleClick () {
    //子组件调用父组件的内容
    // this.props.delItem(this.props.index)
    //代码优化，结构化赋值
    const { delItem, index } = this.props
    delItem(index)
  }
}
//约束传值的类型，规范编码
TodoItem.propTypes = {
  content: PropTypes.string,
  delItem: PropTypes.func,
  index: PropTypes.number,
  param: PropTypes.string.isRequired
}

//设置传值的默认值
TodoItem.defaultProps = {
  param: 'test'
}

export default TodoItem;