import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInitList, getInputChangeAction, getAddItemAction, getDelItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import { getTodoList } from '@/services/list'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
      ]
    }
    this.state = store.getState();
    this.handleItemDel = this.handleItemDel.bind(this);
    store.subscribe(this.handleStoreChange);  //监听store变化
    getTodoList().then(res => {
      const list = []
      if (res) {
        // res.forEach(item => {
        //   list.push(item.name)
        // })
        this.setState({
          list: res
        });
      }

    })
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDel={this.handleItemDel}
      />
    );
  };

  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value);

    store.dispatch(action);
  };

  handleStoreChange = () => {
    this.setState(store.getState());
  };

  handleBtnClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  };

  handleItemDel(index) {
    const action = getDelItemAction(index);
    store.dispatch(action);
  };
}

export default TodoList;