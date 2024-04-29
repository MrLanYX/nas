## 重启计划

项目介绍：仿造macOS系统操作风格的nas系统

重启原因：原本只是本人开发前端，后端另外有人。现在各有各有的事忙起来不方便，改为本人全栈开发，由于涉猎较浅前后端全部采用nodejs相关语言开发。

## 技术选型

分为两大类：前端、后端

### 前端

| 技术 | 版本号 |
| --- | --- |
| vite | v3.4.24 |



### 后端

| 技术 | 版本号 |
| --- | --- |
| egg | 3.17.5 |
| ~~egg-mysql~~ | ~~4.0.0~~ |
| egg-sequelize | 6.0.0 |
| mysql2 | 3.9.7 |
| sequelize-cli | 6.6.2 |
| egg-validate | 2.0.2 |
| xxx | xxx |
| xxx | xxx |
| xxx | xxx |
| xxx | xxx |
| xxx | xxx |

---

$$
代码结构划分
$$


`router.js`文件：接口地址声明位置

`controller`文件夹：用于判断客户端数据和返回结果

`service`文件夹：用于处理业务操作，调用不同的查询语句

`model`文件夹：用于编写数据库的各种操作


---
需求分析参考Xmind文档

---


## 进度日志

+ 2024.4.23 项目重启，基本框架选型定版本
+ 2024.4.26 给egg添加插件
    - ~~egg-mysql 数据库操作插件，用来增删改查~~
    - egg-sequelize 数据库创建插件，用代码保存数据的的初始化操作，包括后续的数据库变更
    - mysql2 辅助egg-sequelize插件
    - 准备数据库设计
+ 2024.4.28 egg完善插件
    - sequelize-cli sequelize用来管理数据库变更的插件
    - **舍去mysql插件查询数据库的方式改用sequelize**
    - RESTful API 规范化
        1. 使用egg-validate 插件规范客户端发送来的数据（按需使用）
        2. controller层只处理来的数据和返回数据
        3. service层做业务
        4. model层处理数据库
+ 2024.4.29 整理好每个文件改该干的事，准备设计数据库