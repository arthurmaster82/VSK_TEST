import ISVGLogotipo from '@/components/@common/Illustrations/ISVGLogoTipo';
import NextLink from '@/components/@common/Link';
import * as React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SectionsFooter from './Sections';

const Footer: React.FunctionComponent = () => (
	<footer className="p-4 sm:p-6 bg-vsk-900">
		<div className="max-w-4xl mx-auto px-4 py-4">
			<div className="md:flex md:gap-56">
				<div className="mb-6 md:mb-0 h-full">
					<NextLink href="/" className="flex items-center text-white">
						<ISVGLogotipo
							className="w-20"
							strokeColor={'#fff'}
						/>
					</NextLink>

					<div className="flex md:gap-4 gap-2 py-6 mt-3 text-lg text-gray-400">
						<FaFacebookF className="hover:text-gray-50 cursor-pointer transition duration-150" />
						<FaLinkedin className="hover:text-gray-50 cursor-pointer transition duration-150" />
						<FaInstagram className="hover:text-gray-50 cursor-pointer transition duration-150" />
						<FaTwitter className="hover:text-gray-50 cursor-pointer transition duration-150" />
					</div>

					<p className="text-gray-400 text-sm mt-8">
						© VSK 2022
					</p>
				</div>
				<SectionsFooter />
			</div>
		</div>
	</footer>
);

export default Footer;
