import * as React from 'react';
import { FaCircle } from 'react-icons/fa';
import Lottie, { Options } from 'react-lottie';
import * as animationData from './VSK_AnimacioonHom.json';

interface IThirdSectionHeroHomeProps {}

const optionsLottie: Options = {
	animationData,
	autoplay: true,
	loop: true,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const ThirdSectionHeroHome: React.FunctionComponent<IThirdSectionHeroHomeProps> = props => {
	const {} = props;
	return (
		<div className="min-h-screen h-screen pb-12 hidden lg:block max-w-6xl mx-auto px-4">
			<div className="flex items-center h-full justify-center">
				<div className="grid lg:grid-cols-12 gap-8">
					<div className="lg:col-span-3 mt-20">
						<h4 className="text-white text-2xl">
							CONECTE-SE COM O SEU MUNDO FINANCEIRO
						</h4>

						<ul className="text-gray-400 mt-8 space-y-2 font-light ">
							<li className="flex items-end mb-6">
								<FaCircle className="text-xs mb-1 text-white" />
								<span className="text-5xl text-white pb-2 border-b-4 ml-4 border-white">
									<span className="text-6xl mr-2.5">
										01
									</span>{' '}
									Você
								</span>
							</li>

							<li className="flex items-center">
								<FaCircle className="text-[0.5rem]" />
								<span className="text-lg pb-2 ml-4">
									02 Sua Empresa
								</span>
							</li>

							<li className="flex items-center">
								<FaCircle className="text-[0.5rem]" />
								<span className="text-lg pb-2 ml-4">
									03 Serviços Custom
								</span>
							</li>

							<li className="flex items-center">
								<FaCircle className="text-[0.5rem]" />
								<span className="text-lg pb-2 ml-4">
									04 Sobre Ser Mais
								</span>
							</li>
						</ul>
					</div>
					<div className="lg:col-span-9 relative">
						<div className="select-none cursor-default pointer-events-none">
							<Lottie
								options={optionsLottie}
								isPaused={false}
								isStopped={false}
							/>
						</div>

						<span className="absolute top-28 2xl:left-36 xl:left-36 lg:left-16 bg-gray-600 py-3 px-8 text-sm text-white rounded-full whitespace-nowrap">
							PAGAMENTO DE BOLETO
						</span>

						<span className="absolute bottom-24 2xl:left-48 xl:left-56 lg:left-36 bg-gray-600 py-3 px-8 text-sm text-white rounded-full whitespace-nowrap">
							PIX
						</span>

						<span className="absolute bottom-0 top-0 my-auto h-[4rem] 2xl:right-10 xl:right-5 lg:right-2 w-48 right-36 bg-gray-600 py-3 px-8 text-sm text-white rounded-full whitespace-nowrap">
							CARTÃO DE CRÉDITO <br /> INSTANTÂNEO
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdSectionHeroHome;
