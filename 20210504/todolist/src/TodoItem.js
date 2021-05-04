import React, { Component } from 'react'
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

export default TodoItem;