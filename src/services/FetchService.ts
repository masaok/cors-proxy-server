import { Request } from 'express'

export const fetchRaw = async (req: Request, res) => {
  const { url } = req.params

  //   const url = 'https%3A%2F%2Fexample-files.online-convert.com%2Fdocument%2Ftxt%2Fexample.txt' // example live text file

  //   const url =
  //     'https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2F6to0vu3lbn1e3jlfc8acdp5l3s%2540group.calendar.google.com%2Fpublic%2Fbasic.ics' // example live calendar ICS feed

  const decoded = decodeURIComponent(url)

  const response = await fetch(decoded)
  const body = await response.text()

  console.log(decoded)

  res.set('Content-Type', 'text/plain')
  res.send(body)
}
