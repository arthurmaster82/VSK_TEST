import * as React from 'react';
import ISVGIsoTipo from '../@common/Illustrations/ISVGIsoTipo';

interface ISectio4AboutProps {}

const Sectio4About: React.FunctionComponent<ISectio4AboutProps> = props => {
	const {} = props;
	return (
		<section className="relative bg-vsk-900">
			<div className="flex md:flex-row flex-col gap-16 md:gap-36 max-w-4xl mx-auto px-4 py-16 md:py-24 lg:py-32">
				<div className="md:order-1 order-2">
					<img
						src="/images/Seguridad.png"
						alt="Security"
						className={'w-56 mx-auto'}
					/>
				</div>

				<div className="text-white md:order-2 order-1">
					<h6 className="font-light mb-8">VSK MAIS SEGUROS</h6>
					<h2 className="text-2xl md:text-4xl font-bold mb-8">
						Chegamos para <br /> oferecer <br /> uma nova
						experiência <br /> de segurança.
					</h2>

					<p className="text-slate-200 text-lg">
						PROTEGENDO você, sua família, <br /> seu patrimônio
						e sua renda.
					</p>
				</div>
			</div>

			<div className="absolute bottom-10 right-10">
				<ISVGIsoTipo className="w-12" strokeColor={'#efefef'} />
			</div>
		</section>
	);
};

export default Sectio4About;
