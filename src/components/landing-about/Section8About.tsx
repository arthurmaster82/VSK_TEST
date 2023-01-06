import * as React from 'react';

interface ISectio8AboutProps {}

const Sectio8About: React.FunctionComponent<ISectio8AboutProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-900">
			<div className="flex md:flex-row flex-col gap-12 md:gap-36 max-w-6xl mx-auto p-x4 md:py-24 py-16 px-4">
				<div className="flex items-center justify-center md:order-1 order-2">
					<img src="/images/Crypto.png" alt="Crypto chip" />
				</div>
				<div className="text-white md:order-2 order-1">
					<h6 className="text-sm mb-4 font-light">VSK MAIS CRIPTO</h6>

					<h6 className="font-bold mb-8 md:text-4xl text-2xl">
						CHEGAMOS PARA OFERECER UMA NOVA EXPERIÊNCIA 
						FINANCEIRA.
					</h6>

					<p className="text-sm mb-8 font-light">
						O dinheiro digital descentralizado, criado para ser
						usado na internet.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Sectio8About;
