# react 新 Context api 实践

# 使用
- `$ npm i`
- `$ npm start`

# 解释
如果创建多个 context ，会导致多层 provider 和 consumer 嵌套。于是选择将所有的状态放在一个 context 中，通过 state 不同的 key 来区分不同的数据，同时将修改 state 中的数据的方法也放在 state 中，并且通过 value 向下传，子组件通过传入的方法来进行全局的状态修改。
