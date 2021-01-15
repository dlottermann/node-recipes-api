const normalizeQuery = param => {
  if (param !== '') {
    if (param.includes(',')) {
      return param.split(',')
    } else {
      return [param]
    }
  } else {
    return null
  }
}

module.exports = { normalizeQuery }
