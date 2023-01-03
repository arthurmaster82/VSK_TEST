import Main from '@/templates/Main';
import '../../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Main>
			<Component {...pageProps} />
		</Main>
	);
};

export default MyApp;
