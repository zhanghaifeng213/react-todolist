## 此为 todolist 项目后端接口

### 1. 使用方式 
    安装依赖 ： npm install  
    启动工程 ： npm run serve 
    项目默认启动在 3000 端口

### 2. 接口文档  
1. 查询所有todolist
    - 方法: get
    - 请求url: http://localhost:3000/api/list
    - 返回格式：  
        ``` javascript
            [
                {
                    "id": 1,
                    "isDone": false,
                    "name": "todo"
                }
            ]
        ```
    
2. 添加一个todo
    - 方法：post
    - 请求url: http://localhost:3000/api/list
    - 请求参数：
        ```javascript
                {
                    "name": "todo"
                }
        ```
    - 返回格式：  
        ```javascript
            [
                {
                    "id": 1,
                    "isDone": false,
                    "name": "todo"
                }
            ]
        ```

3. 变更一个todo的状态
    - 方法：put
    - 请求url: http://localhost:3000/api/list/:id
    - 返回格式：  
        ```javascript
            [
                {
                    "id": 1,
                    "isDone": true,
                    "name": "todo"
                }
            ]
        ```
4. 删除一个todo
    - 方法：delete
    - 请求url: http://localhost:3000/api/list/:id
    - 返回格式：  
        ```javascript
            [
                {
                    "id": 1,
                    "isDone": true,
                    "name": "todo"
                }
            ]
        ```