import * as React from 'react';
import dynamic from 'next/dynamic';
import { FaBars } from 'react-icons/fa';
import { RenderIf } from '@/components/@common/RenderIf';
import NextLink from '@/components/@common/Link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

const DrawerMobile = dynamic(() => import('./DrawerMobile'), { ssr: false });

interface INavbarProps {
	isDark: boolean;
}

const Navbar: React.FC<INavbarProps> = props => {
	const { isDark } = props;
	const [openedDrawer, setOpenedDrawer] = React.useState(false);
	const toggleDrawer = () => setOpenedDrawer(!openedDrawer);

	return (
		<nav className="flex lg:bg-info h-full">
			<ul className="flex flex-grow justify-end flex-nowrap items-center space-x-3 p-5">
				<RenderIf isTrue={true}>
					<li className="hidden lg:block">
						<NextLink
							href="https://ip-vskbank-stg.4bank.com.br"
							className="btn-sm rounded-full px-4 border border-slate-800 text-xs hover:bg-slate-800 hover:text-white transition duration-150"
						>
							<span className="whitespace-nowrap">
								Entrar
							</span>
						</NextLink>
					</li>
					<li className="lg:flex hidden gap-2 items-center group cursor-pointer">
					<NextLink
						href="https://pc-vskbank-stg.4bank.com.br/"
					    className="text-sm border-b border-slate-800 group-hover:text-slate-600 group-hover:border-slate-600 transition duration-150">
							
							<span className="whitespace-nowrap">
								Abra a sua conta
							</span>
							</NextLink>
						

						<AiOutlineArrowRight className="text-xs group-hover:text-slate-600 transition duration-150" />
					</li>
				</RenderIf>

				<RenderIf isTrue={false}>
					<li className="hidden lg:block">
						<NextLink
							href="/signin"
							className="btn-sm rounded-full px-4 border border-slate-800 text-xs hover:bg-slate-800 hover:text-white transition duration-150"
						>
							<span>Profile</span>
						</NextLink>
					</li>
					<li className="lg:flex hidden gap-2 items-center group cursor-pointer">
						<button className="text-sm border-b border-slate-800 group-hover:text-slate-600 group-hover:border-slate-600 transition duration-150">
							<span>Logout</span>{' '}
						</button>

						<FiLogOut className="text-xs group-hover:text-slate-600 transition duration-150" />
					</li>
				</RenderIf>

				<li className="block lg:hidden">
					<FaBars
						className={`cursor-pointer ${
							isDark ? 'text-white' : 'text-black'
						}`}
						size={25}
						onClick={toggleDrawer}
					/>
				</li>

				<DrawerMobile
					toggleDrawer={toggleDrawer}
					openedDrawer={openedDrawer}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
