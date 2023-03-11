// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { google } from 'googleapis'

type Data = {
  timestamp: string
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
    timestamp: item[0],
    name: item[1],
    wish: item[2],
  }))
  // const data: Data[] = rows.map(row => ({
  //   timestamp: row.Timestamp,
  //   name: row.Nama,
  //   wish: row.Ucapan,
  // }))

  res.status(200).json(data)
}
