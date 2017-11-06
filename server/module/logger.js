const log = require('log4js')
log.configure({
  appenders: {
    console: {type: 'console'},
    file: {
      type: 'dateFile',
      filename: './logs/system',
      pattern: '-yy-MM.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {appenders: ['file', 'console'], level: 'all'}
  }
})
module.exports = log.getLogger('system')
