import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {

  //相当于静态代码块，最优先执行的方法
  constructor(props) {
    super(props);
    //数据定义在状态里面
    this.state = {
      inputValue: '',
      list: ['学习语文', '学习数学']
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.delItem = this.delItem.bind(this)
  }

  render () {
    return (
      <Fragment>
        {/* 注释这样写才是正确的 */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleChange}
            ref={(inputDom) => { this.input = inputDom }} />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul ref={(ul) => this.ul = ul}>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    )
  }

  handleChange (e) {
    // console.log(e.target.value);
    // this.state.inputValue = e.target.value
    // this.setState({
    //   inputValue: e.target.value
    // })
    // const value = e.target.value
    //ref属性的使用
    const value = this.input.value
    // 带返回值，“()”表示返回值的意思
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleClick () {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    //异步函数
    this.setState((prev) => ({
      list: [...prev.list, prev.inputValue],
      inputValue: ''
    }), () => {
      //异步函数执行之后执行此方法
      console.log(this.ul.querySelectorAll('div').length);
    })
  }

  delItem (index) {
    // const list = [...this.state.list];
    // list.splice(index, 1)
    // this.setState({
    //   list: list
    // })
    this.setState((prev) => {
      const list = [...prev.list]
      list.splice(index, 1)
      return { list }
    })
  }

  getTodoItems () {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          {/* 组件化 */}
          {/* 父组件向子组件传值 */}
          <TodoItem
            content={item}
            index={index}
            delItem={this.delItem} />
          {/*<li key={index}
          onClick={this.delItem.bind(this, index)}
          dangerouslySetInnerHTML={{ __html: item }}></li>*/}
        </div>
      )
    })
  }
}
export default TodoList