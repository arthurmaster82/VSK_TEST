import ISVGIsoTipo from '@/components/@common/Illustrations/ISVGIsoTipo';
import * as React from 'react';

interface IFirstSectionHeroHomeProps {}

const FirstSectionHeroHome: React.FunctionComponent<IFirstSectionHeroHomeProps> = props => {
	const {} = props;
	return (
		<div className="flex items-center">
			<div className="text-white px-6 md:px-12 container flex md:flex-row flex-col items-center md:py-36 pb-20 pt-12">
				<div className="xl:w-9/12 lg:w-[70%] font-grotesk md:text-4xl text-xl md:mb-0 mb-4 md:text-start text-center font-bold">
					<h5 className="lg:text-5xl md:text-3xl text-xl py-2 tracking-tight border-y border-white">
						Chegamos para oferecer
					</h5>
					<h5 className="lg:text-5xl md:text-3xl text-xl py-2 tracking-tight border-b border-white">
						uma nova Experiência Financeira
					</h5>
				</div>

				<div className="bg-vsk-700 py-6 px-4 xl:w-3/12 lg:w-[30%]">
					<span>
						<ISVGIsoTipo
							className="w-20 opacity-30"
							strokeColor={'#f0f0f0'}
						/>
					</span>

					<p className="md:py-12 py-6 px-2 text-lg">SEJA MAIS</p>

					<div className="pb-8">
						<div className="flex items-center text-center gap-2 text-xs md:text-sm">
							<span className="py-1 px-2 border-vsk-700">
								Conta Digital
							</span>

							<span className="py-1 px-2 border-vsk-700">
								Cartão Virtual
							</span>
						</div>

						<div className="flex items-center text-center gap-2 text-xs md:text-sm mt-2">
							<span className="py-1 px-2 border-vsk-700">
								Sob Medida Para O Seu Negócio
							</span>

							<span className="py-1 px-2 border-vsk-700">
								Pix
							</span>
						</div>

						<div className="flex items-center text-center gap-2 text-xs md:text-sm mt-2">
							<span className="py-1 px-2 border-vsk-700">
								Conta PJ Empresas
							</span>

							</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FirstSectionHeroHome;
