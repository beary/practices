const rewireLess = require('react-app-rewire-less')
const rewireTypeScript = require('react-app-rewire-typescript')

module.exports = (config, env) => {
  config = rewireTypeScript(config, env)
  config = rewireLess(config, env)
  return config
}
