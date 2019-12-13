const express = require('express')
const list = require('../routes/list');

module.exports = function (app) {
    // 添加中间件函数
    app.use(express.json());
    app.use('/api/list', list);
}