import { Request } from 'express'

export const fetchRaw = async (req: Request, res) => {
  const { url } = req.params

  const decoded = decodeURIComponent(url)

  const response = await fetch(decoded)
  const body = await response.text()

  console.log(decoded)

  res.set('Content-Type', 'text/plain')
  res.send(body)
}
