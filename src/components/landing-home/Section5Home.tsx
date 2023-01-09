import * as React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';
import ISVGArrowLeftRight from '../@common/Illustrations/ISVGArrowLeftRight';
import ISVGrowCoins from '../@common/Illustrations/ISVGGrowCoins';
import ISVGPlanifications from '../@common/Illustrations/ISVGPlanification';

interface ISection5HomeProps {}

const Section5Home: React.FunctionComponent<ISection5HomeProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-900 relative">
			<div className="xl:px-0 px-4">
				<div
					className={
						'items-center justify-center text-justify text-transparent text-[4rem] py-20 xl:flex hidden'
					}
				>
					<TextoVertical>VSK PARA A SUA EMPRESA</TextoVertical>
				</div>
				<div className="xl:hidden py-3" />
				<Card className="xl:absolute -top-10 right-96 -left-72 p-8 max-w-md text-white bg-vsk-900 mx-auto lg:mb-0 mb-6">
					<span className="mx-auto flex items-center w-full justify-center mb-7">
						<ISVGrowCoins className="w-72" />
					</span>

					<h6 className="text-info text-center mb-8 text-2xl">
						Capital de Crescimento
					</h6>

					<p className="text-lg font-light xl:px-12 text-center">
						Cadastre-se em minutos, sem burocracia, sem taxas
						escondidas e solicite o capital de crescimento para
						o seu próximo projeto criativo.
					</p>

					<span className="w-full text-center text-info flex gap-2 items-center justify-center mt-6 text-lg cursor-pointer hover:text-infoHover transition duration-150">
						<span>Acesso ao capital</span>{' '}
						<AiOutlineArrowRight />
					</span>
				</Card>

				<div className="xl:absolute bottom-0 top-0 lg:right-8 xl:right-20 2xl:right-56 max-w-md text-white mx-auto lg:pb-0 pb-6">
					<div className="flex items-center justify-center h-full w-full ">
						<Card className="p-8 bg-vsk-900">
							<span className="mx-auto flex items-center w-full justify-center mb-7">
								<ISVGArrowLeftRight className="w-56" />
							</span>

							<h6 className="text-info text-center mb-8 text-2xl">
								Transações financeiras
							</h6>

							<p className="text-lg font-light xl:px-12 text-center">
								Agende suas transações financeiras,
								Pix, transferências, pague e receba
								em tempo real.
							</p>

							<span className="text-center text-info flex gap-2 items-center justify-center mt-6 text-lg cursor-pointer hover:text-infoHover transition duration-150">
								<span>Saiba mais</span>{' '}
								<AiOutlineArrowRight />
							</span>
						</Card>
					</div>
				</div>

				<Card className="xl:absolute -bottom-10 right-96 -left-36 p-8 max-w-md text-white bg-vsk-900 mx-auto lg:mb-0 mb-6">
					<span className="mx-auto flex items-center w-full justify-center mb-7">
						<ISVGPlanifications className="w-56" />
					</span>

					<h6 className="text-info text-center mb-8 text-2xl">
						Soluções Customizadas
					</h6>

					<p className="text-lg font-light xl:px-12 text-center">
						Soluções e produtos construídos a partir do cliente,
						sob medida e sob demanda.
					</p>

					<span className="w-full text-center text-info flex gap-2 items-center justify-center mt-6 text-lg cursor-pointer hover:text-infoHover transition duration-150">
						<span>Saiba mais</span> <AiOutlineArrowRight />
					</span>
				</Card>

				<div className="xl:py-0 py-6">
					<button className="btn-info xl:absolute bottom-0 lg:p-8 p-4 text-2xl flex items-center gap-2 xl:right-32 2xl:right-56 mx-auto transition duration-150">
						<span>Comece Agora</span> <AiOutlineArrowRight />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Section5Home;

const TextoVertical = styled.p`
	user-select: none;
	color: #2222;
	writing-mode: vertical-lr;
	transform: rotate(180deg);
	-webkit-text-stroke-color: #3f3f3f;
	-webkit-text-stroke-width: 2px;
`;

const Card = styled.div`
	box-shadow: 0px 19px 24px #00000029;
`;
