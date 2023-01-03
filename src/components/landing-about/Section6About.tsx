import * as React from 'react';
import ISVGIsoTipo from '../@common/Illustrations/ISVGIsoTipo';

interface ISectio6AboutProps {}

const Sectio6About: React.FunctionComponent<ISectio6AboutProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-900">
			<div className="grid lg:grid-cols-2 text-white">
				<div className="flex items-center justify-center max-w-xl mx-auto px-4 flex-col lg:py-28 pb-4 pt-12 relative">
					<h3 className="w-full mb-8 font-light">
						INVESTIDOR VSK MAIS
					</h3>

					<h6 className="w-full font-bold md:text-4xl text-3xl">
						CHEGAMOS PARA OFERECER UMA NOVA EXPERIÊNCIA DE
						INVESTIMENTOS.
					</h6>

					<p className="text-lg">
						Desenvolva a HABILIDADE FINANCEIRA que te colocará
						no comando e te entregará a confiança para ir MAIS
						longe.
					</p>

					<div className="absolute lg:block hidden bottom-7 left-3">
						<ISVGIsoTipo className="w-10" />
					</div>
				</div>

				<div className="lg:pt-28">
					<img src="/images/Invest.png" alt="" />
				</div>
			</div>
		</section>
	);
};

export default Sectio6About;
