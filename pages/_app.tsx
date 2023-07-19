import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
// import { BrowserRouter } from 'react-router-dom';
import Router from '../components/Router';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Analytics />
			{/* <BrowserRouter> */}
				<Component {...pageProps} />
			{/* </BrowserRouter> */}
			{/* <Router /> */}
		</>
	);
};

export default MyApp;
