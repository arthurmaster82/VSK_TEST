import NextLink from '@/components/@common/Link';
import * as React from 'react';

interface ISectionsFooterProps {}

const SectionsFooter: React.FunctionComponent<ISectionsFooterProps> = () => (
	<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
		<div>
			<h2 className="mb-6 text-sm font-semibold uppercase text-white">Home</h2>
			<ul className="text-gray-400 text-sm">
				<li className="mb-3">
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						Você
					</NextLink>
				</li>
				<li className="mb-3">
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						Sua Empresa
					</NextLink>
				</li>

				<li>
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						Sobre Ser Mais
					</NextLink>
				</li>
			</ul>
		</div>
		<div>
			<h2 className="mb-6 text-sm font-semibold uppercase text-white">
				Para Você
			</h2>
			<ul className="text-gray-400 text-sm">
				<li className="mb-3">
					<NextLink
						href="/para-voce"
						className="hover:underline text-[#D1E0FB] "
					>
						Crédito
					</NextLink>
				</li>
				<li className="mb-3">
					<NextLink
						href="/para-voce"
						className="hover:underline text-[#D1E0FB]"
					>
						Investimento
					</NextLink>
				</li>

				<li>
					<NextLink
						href="/para-voce"
						className="hover:underline text-[#D1E0FB]"
					>
						Seguro
					</NextLink>
				</li>
			</ul>
		</div>
		<div>
			<h2 className="mb-6 text-sm font-semibold uppercase text-white">
				Para a Sua Empresa
			</h2>
			<ul className="text-gray-400 text-sm">
				<li className="mb-3">
					<NextLink
						href="/empresa"
						className="hover:underline text-[#D1E0FB]"
					>
						Conta PG
					</NextLink>
				</li>
				<li>
					<NextLink
						href="/empresa"
						className="hover:underline text-[#D1E0FB]"
					>
						Crédito Empresas
					</NextLink>
				</li>
			</ul>
		</div>

		<div className="sm:mt-8">
			<h2 className="mb-6 text-sm font-semibold uppercase text-white">
				Sobre VSK
			</h2>
			<ul className="text-gray-400 text-sm">
				<li className="mb-3">
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						Developers
					</NextLink>
				</li>
				<li className="mb-3">
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						Help
					</NextLink>
				</li>

				<li className="mb-3">
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						Docs
					</NextLink>
				</li>

				<li className="mb-3">
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						Free
					</NextLink>
				</li>

				<li>
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						Training
					</NextLink>
				</li>
			</ul>
		</div>

		<div className="sm:mt-8">
			<h2 className="mb-2 text-sm font-semibold uppercase text-white">Home</h2>
			<ul className="text-gray-200 text-sm">
				<li className="mb-3">
					<NextLink
						href="/"
						className="hover:underline text-[#D1E0FB]"
					>
						FAQs
					</NextLink>
				</li>

				<li>
					<NextLink
						href="/termos-de-uso"
						className="hover:underline text-[#D1E0FB]"
					>
						Termos de Uso
					</NextLink>
				</li>
			</ul>
		</div>
	</div>
);

export default SectionsFooter;
