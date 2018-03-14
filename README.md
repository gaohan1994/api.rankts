# 幻音音乐狼人杀排行系统后端

## 技术栈
* koa2: √
* react: √
* mongo: √
* mongose: √
* webpack: √
* GraphQl: √
* TypeScript: √ 
* jest:
* mock:

## 日记
* 预计完成时间6月1日
* 3.10开始 准备搭建环境 建表 可能要换成express框架了
* 3.11开始搭建
* 3.12基本搭建完成，还是选择了koa 目前集成了koa-router typescript下一步集成mongo和mocha
* 0604mongo完成开始集成mocha.放弃集成mocha开始集成graphql.问题1 为什么要加基类? 逻辑 + 存储 逻辑不分高低，只存在熟练度的差异，存储则考验功底。
* 3.13今天增加了删除和更新，开始集成了graphql。
* 3.14整合graphql成功，把查询数据切换成graphql来暴露数据。