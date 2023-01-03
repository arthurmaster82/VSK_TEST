import * as React from 'react';
import Drawer from 'react-rainbow-components/components/Drawer';
import { RenderIf } from '@/components/@common/RenderIf';
import NextLink from '@/components/@common/Link';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import Divider from '@/components/@common/Divider';

interface IDrawerMobileProps {
	toggleDrawer(): void;
	openedDrawer: boolean;
}

const DrawerMobile: React.FunctionComponent<IDrawerMobileProps> = props => {
	const { openedDrawer, toggleDrawer } = props;

	return (
		<Drawer isOpen={openedDrawer} slideFrom={'right'} onRequestClose={toggleDrawer}>
			<ul className="flex flex-grow flex-col mt-20 justify-center items-center space-y-5">
				<li>
					<NextLink
						className="hover:underline text-sm"
						href="/"
						onClick={toggleDrawer}
					>
						Home
					</NextLink>
				</li>
				<li>
					<NextLink
						className="hover:underline text-sm"
						href="/para-voce"
						onClick={toggleDrawer}
					>
						Para Você
					</NextLink>
				</li>
				<li>
					<NextLink
						className="hover:underline text-sm"
						href="/empresa"
						onClick={toggleDrawer}
					>
						Para A Sua Empresa
					</NextLink>
				</li>

				<li>
					<NextLink
						className="hover:underline text-sm"
						href="/contato"
						onClick={toggleDrawer}
					>
						Contato
					</NextLink>
				</li>

				<Divider className="bg-vsk-900" />

				<RenderIf isTrue={false}>
					<li>
						<NextLink
							href="/"
							className="btn btn-info btn-sm px-4"
							onClick={toggleDrawer}
						>
							<span>Profile</span>
							<FaUser />
						</NextLink>
					</li>
					<li>
						<button
							onClick={() => {
								toggleDrawer();
							}}
							className="btn btn-default bg-gray-100 hover:bg-gray-200 btn-sm px-6"
						>
							<span>Logout</span> <FaSignOutAlt />
						</button>
					</li>
				</RenderIf>

				<RenderIf isTrue={true}>
					<li>
						<NextLink
							href="/login"
							className="btn btn-sm btn-info px-8"
							onClick={toggleDrawer}
						>
							Log In
						</NextLink>
					</li>

					<li>
						<NextLink
							href="/signup"
							className="btn btn-sm bg-gray-100 hover:bg-gray-200 px-8"
							onClick={toggleDrawer}
						>
							Sign Up
						</NextLink>
					</li>
				</RenderIf>
			</ul>
		</Drawer>
	);
};

export default DrawerMobile;
