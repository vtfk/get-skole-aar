module.exports = dato => {
  const date = dato ? new Date(dato) : new Date()
  const month = date.getMonth() + 1
  let thisYear = date.getFullYear()

  if (month > 7) {
    thisYear++
  }

  return `${thisYear - 1}/${thisYear}`
}
