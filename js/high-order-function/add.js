function buildurl(url, obj) {
  let parts = []
  for (let key of Object.keys(obj)) {
    parts.push(`${key}=${obj[key]}`)
  }
  return `${url}?${parts.join('&')}`
}
console.log(buildurl('api.com', { a: 1, b: 2 }))
console.log(buildurl('api.com', { a: 1, b: 2 }))