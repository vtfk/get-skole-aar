module.exports = dato => {
  const date = dato ? new Date(dato) : new Date()
  if (!date || date.toString() === 'Invalid Date') throw new Error(`Invalid date: ${dato}`)

  const month = date.getMonth() + 1
  let thisYear = date.getFullYear()

  if (month > 7) {
    thisYear++
  }

  return `${thisYear - 1}/${thisYear}`
}
