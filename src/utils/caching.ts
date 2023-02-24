import mcache from 'memory-cache'

export const cache = (duration: number) => {
  return (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url
    const cachedBody = mcache.get(key)
    if (cachedBody) {
      console.log('CACHE HIT')
      res.send(cachedBody)
      return
    } else {
      console.log('CACHE MISS')
      res.sendResponse = res.send
      res.send = body => {
        mcache.put(key, body, duration * 1000)
        res.sendResponse(body)
      }
      next()
    }
  }
}
