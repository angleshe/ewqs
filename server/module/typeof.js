function isArray (o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}
function isExit (o) {
  try {
    return typeof (o) !== 'undefined'
  } catch (e) {
    return false
  }
}
module.exports = {isArray, isExit}
