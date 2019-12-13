import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';

const defaultstate = {
  inputValue: '',
  list: ['aa', 'bb', 'cc'],
};

//reducer可以接收state，绝不能修改state
export default (state = defaultstate, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      return newState;
    case ADD_TODO_ITEM:
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case DEL_TODO_ITEM:
      newState.list.splice(action.index, 1);
      return newState;
    case INIT_LIST_ACTION:
      newState.list = action.data;
      return newState;
    default:
      return state;
  }
}