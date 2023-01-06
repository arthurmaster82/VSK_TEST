import * as React from 'react';
import ISVGLogotipo from '../@common/Illustrations/ISVGLogoTipo';

interface ISection1HomeProps {}

const Section1Home: React.FunctionComponent<ISection1HomeProps> = props => {
	const {} = props;
	return (
		<section id={'pessoal'} className="relative bg-vsk-900">
			<div className="flex md:flex-row flex-col gap-12 md:gap-16 max-w-5xl mx-auto px-4 py-20">
				<div className="md:order-1 order-2">
					<p className="lg:ml-12 text-info text-xl mb-6">Para Você</p>

					<p className="lg:ml-12  mb-12">
						<ISVGLogotipo
							className="w-36"
							strokeColor={'#fff'}
						/>
					</p>

					<img src="/images/Celu1.png" alt="Celular" />
				</div>

				<div className="text-white md:order-2 order-1 m-auto">
					<h2 className="text-2xl md:text-4xl lg:text-6xl mb-8">
						Suas finanças <br /> em um só <br /> lugar
					</h2>

					<p className="text-slate-200 text-lg">
						O Mobile Bank que ajuda a cuidar da sua conta
						bancária, <br /> planejar suas despesas e gerenciar
						seus lucros, com facilidade e transparência total.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Section1Home;
