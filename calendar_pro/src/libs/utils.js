function _addZero(value) {
  return value <10 ? ('0'+value) :value
}

function getIconDate(type) {
  const date = new Date()
  // let year = date.getFullYear().toString().substr(2)
  switch(type) {
    case 'day':
      return _addZero(date.getDate().toString())
    case 'month':
      return _addZero((date.getMonth()+1).toString())
    case 'year':
      return date.getFullYear().toString().substr(2)
  }
}

export {
  getIconDate
}