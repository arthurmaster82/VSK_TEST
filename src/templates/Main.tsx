import * as React from 'react';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'));
const Header = dynamic(() => import('./Header'));

interface IMainProps {
	children?: React.ReactNode;
}

const Main: React.FunctionComponent<IMainProps> = props => (
	<div className="flex flex-col min-h-screen overflow-x-hidden">
		<Header />

		{props.children}

		<Footer />
	</div>
);

export default Main;
