import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
import { parse } from 'date-fns'

type Data = {
  timestamp: number
  name: string
  wish: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const sheet = google.sheets({
    version: 'v4',
    auth: process.env.GOOGLE_API_KEY
  })

  const apiResponse = await sheet.spreadsheets.values.get({
    spreadsheetId: '1bwtLUMoHXeTUn6FiKKELpsu2YH2ZyXM6xXuzXfuzMw8',
    range: 'A2:D'
  })

  const data: Data[] = (apiResponse.data.values ?? []).map(item => ({
    timestamp: parse(item[0], 'dd/MM/yyyy HH:mm:ss', new Date()).getTime(),
    name: item[1],
    wish: item[2],
  }))
  res.status(200).json(data)
}
