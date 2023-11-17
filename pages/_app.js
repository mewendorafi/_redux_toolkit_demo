import '../styles/globals.css';
import Head from 'next/head';

import StoreProvider from '../redux/store/storeProvider';

function App({ Component, pageProps }) {
	return (
		<StoreProvider>
			<Head>
				<title>Next.js App</title>
			</Head>
			<Component {...pageProps} />
		</StoreProvider>
	);
}

export default App;
