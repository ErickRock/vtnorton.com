import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../../node_modules/heartthrob/build/heartthrob.css'
import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>vtnorton</title>

				<meta name='theme-color' content='#3B509E'></meta>
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png?v=10' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png?v=10' />
				<link rel='icon' type='image/png' sizes='194x194' href='/favicon/favicon-194x194.png?v=10' />
				<link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-chrome-192x192.png?v=10' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png?v=10' />
				<link rel='manifest' href='/favicon/site.webmanifest?v=10' />
				<link rel='mask-icon' href='/favicon/safari-pinned-tab.svg?v=10' color='#5bbad5' />
				<link rel='shortcut icon' href='/favicon/favicon.ico?v=10' />
				<meta name='msapplication-TileColor' content='#2b5797' />
				<meta name='msapplication-TileImage' content='/favicon/mstile-144x144.png?v=10' />
				<meta name='msapplication-config' content='/favicon/browserconfig.xml?v=10' />
				<meta name='theme-color' content='#ffffff' />
				<link rel='shortcut icon' href='/favicon/favicon-32x32.png' />

				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<link rel='canonical' href='https://vtnorton.com/' />
				<meta property='og:locale' content='pt_BR' />
				<meta property='og:locale:alternate' content='en_US' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://vtnorton.com/' />
				<meta property='og:site_name' content='v&iacute;tor norton' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@vt_norton' />
				<meta name='twitter:site' content='@vt_norton' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
