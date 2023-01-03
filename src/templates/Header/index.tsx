import ISVGLogotipo from '@/components/@common/Illustrations/ISVGLogoTipo';
import NextLink from '@/components/@common/Link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import * as React from 'react';
import Navbar from './Navbar';
import NavigationDesktop from './NavigatioDesktop';

const routesValidDark = ['/', '/contato', '/termos-de-uso'];

function Header() {
	const { pathname } = useRouter();

	const isValidDark = routesValidDark.includes(pathname);

	let className: string;

	if (isValidDark) {
		className = classNames(
			'bg-vsk-900 shadow-xl w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out'
		);
	} else {
		className = classNames(
			'absolute w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out'
		);
	}

	return (
		<header className={className}>
			<div>
				<div className="flex items-center justify-between h-16 md:h-20 xl:container">
					<div className="flex-shrink-0 mr-4 flex px-4">
						<NextLink
							href="/"
							className="block h-full relative"
							aria-label="Cruip"
						>
							{isValidDark ? (
								<ISVGLogotipo
									className="w-20"
									strokeColor={'#fff'}
								/>
							) : (
								<ISVGLogotipo className="w-20" />
							)}
						</NextLink>

						<NavigationDesktop isValidDark={isValidDark} />
					</div>

					<Navbar isDark={isValidDark} />
				</div>
			</div>
		</header>
	);
}

export default Header;
