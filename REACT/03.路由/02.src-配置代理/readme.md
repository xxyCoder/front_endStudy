# 配置脚手架代理
1. 在package.json中配置
    - "proxy": 'url'
    - 配置简单，没有多余前缀
    - 但是不能配置多个代理
2. 在src中创建setupProxy.js
    - 可以创建多个代理
