import { GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';



export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const getDelItemAction = (index) => ({
  type: DEL_TODO_ITEM,
  index,
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

export const getInitList = () => ({
  type: GET_INIT_LIST
});

export const getList = () => {
  return (dispatch) => {
    getTodoList.then((res) => {
      const data = res;
      dispatch(initListAction(data))
    }).catch((err) => {
      console.log(err)
    })
  }
}