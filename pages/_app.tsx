import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Script src="https://code.jquery.com/jquery-2.2.4.min.js" />
    <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" />
    <Script src="/main.js" />
    <Component {...pageProps} />
  </>
  )
}
