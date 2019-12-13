import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div>
        <Input
          style={{ width: '300px', marginRight: '10px' }}
          placeholder='Add Todo'
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button
          type='primary'
          onClick={props.handleBtnClick}
        >提交</Button>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item>
              {item.name}
              <Button
                type='danger'
                icon='delete'
                style={{ float: 'right', marginTop: '-5px' }}
                onClick={() => { props.handleItemDel(index) }}
              ></Button>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default TodoListUI;
