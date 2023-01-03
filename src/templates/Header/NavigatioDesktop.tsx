import NextLink from '@/components/@common/Link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import * as React from 'react';

interface INavigationDesktopProps {
	isValidDark: boolean;
}

const NavigationDesktop: React.FunctionComponent<INavigationDesktopProps> = props => {
	const { isValidDark } = props;

	return (
		<ul
			className={`flex-grow justify-end flex-wrap items-center xl:space-x-12 space-x-4 lg:space-x-12 xl:ml-32 ml-4 text-sm lg:flex hidden ${
				isValidDark ? 'text-white' : 'text-black'
			}`}
		>
			<Li pathname="/">Home</Li>
			<Li pathname="/para-voce">Para Você</Li>
			<Li pathname="/empresa">Para A Sua Empresa</Li>
			<Li pathname="/contato">Contato</Li>
		</ul>
	);
};

export default NavigationDesktop;

interface ILiProps {
	pathname: string;
	children?: React.ReactNode;
}

const Li: React.FC<ILiProps> = ({ pathname, children }) => {
	const router = useRouter();
	return (
		<li>
			<NextLink
				className={classNames({
					'border-b-2 border-[#5F5F5F] pb-1':
						router.pathname === pathname,
					'hover:underline': router.pathname !== pathname,
				})}
				href={pathname}
			>
				{children}
			</NextLink>
		</li>
	);
};
