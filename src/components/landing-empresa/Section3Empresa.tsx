import * as React from 'react';
import ISVGCogs from '../@common/Illustrations/ISVGCogs';
import ISVGControls from '../@common/Illustrations/ISVGControls';
import ISVGCreditCard from '../@common/Illustrations/ISVGCreditCard';
import ISVGCreditCardBuilding from '../@common/Illustrations/ISVGCreditCardBuilding';
import ISVGGlobalHandShake from '../@common/Illustrations/ISVGGlobalHandShake';
import ISVGrowCoins from '../@common/Illustrations/ISVGGrowCoins';

interface ISection3EmpresaProps {}

const Section3Empresa: React.FunctionComponent<ISection3EmpresaProps> = props => {
	const {} = props;
	return (
		<section className="bg-black">
			<div className="lg:pt-56 py-20">
				<div className="container">
					<h2 className="text-center text-2xl text-white lg:text-6xl sm:text-4xl">
						Você No Controle <br /> De Suas finanças.
					</h2>

					<div className="mt-12 grid lg:grid-cols-3 gap-y-8 gap-x-4 xl:gap-x-8 text-center text-white">
						<div className="bg-vsk-900 px-4 lg:py-16 py-8">
							<header>
								<span>
									<ISVGCreditCardBuilding className="w-28 mx-auto" />
								</span>

								<h2 className="mt-8 text-2xl">
									Conta PJ
								</h2>

								<p className="text-gray-300 font-light text-sm lg:mt-8 mt-4 2xl:px-3">
									Conectando o seu mundo
									financeiro com a confiança
									extra que você precisa para
									ir mais longe, sem taxas e
									com ferramentas
									desenvolvidas para entender
									a necessidade do seu
									negócio.
								</p>
							</header>
						</div>
						<div className="bg-vsk-900 px-4 lg:py-16 py-8">
							<header>
								<span>
									<ISVGControls className="w-28 mx-auto" />
								</span>

								<h2 className="mt-14 text-2xl">
									Assuma o Controle
								</h2>

								<p className="text-gray-300 font-light text-sm lg:mt-8 mt-4 2xl:px-3">
									Economize tempo e dinheiro
									ao assumir o controle de
									suas finanças, receber
									pagamentos mais rapidamente
									e acessar capital para
									financiar seu crescimento.
								</p>
							</header>
						</div>

						<div className="bg-vsk-900 px-4 lg:py-16 py-8">
							<header>
								<span>
									<ISVGrowCoins className="w-56 mx-auto" />
								</span>

								<h2 className="mt-8 text-2xl">
									Capital de Crescimento
								</h2>

								<p className="text-gray-300 font-light text-sm lg:mt-8 mt-4 2xl:px-3">
									O capital necessário para
									financiar o desenvolvimento
									de produtos ou turbinar seus
									projetos de crescimento.
									Ganhe MAIS tempo para
									investir na criatividade do
									que fazer e gaste menos
									tempo pensando em como
									fazer.
								</p>
							</header>
						</div>

						<div className="bg-vsk-900 px-4 lg:py-16 py-8">
							<header>
								<span>
									<ISVGCreditCard className="w-36 mx-auto" />
								</span>

								<h2 className="mt-8 text-2xl">
									Cartão PJ <br /> Físico e
									Virtual
								</h2>

								<p className="text-gray-300 font-light text-sm lg:mt-8 mt-4 2xl:px-3">
									Virtual e físico , sem
									anuidades e sem tarifas
									escondidas. Notificações de
									compras em tempo real,
									definição de limite de
									gastos por mês, pensado para 
									o seu negócio, com atendimento
									24hr.
								</p>
							</header>
						</div>

						<div className="bg-vsk-900 px-4 lg:py-16 py-8">
							<header>
								<span>
									<ISVGCogs className="w-28 mx-auto" />
								</span>

								<h2 className="mt-8 text-2xl">
									Gestão de Cobranças
								</h2>

								<p className="text-gray-300 font-light text-sm lg:mt-12 mt-4 2xl:px-3">
									Pix, TEDs e transferências
									gratuitas e ilimitadas ,
									Conectividade com todas as
									plataformas de pagamento,
									emissão de boletos no
									próprio app, sem anuidade ou
									taxas de manutenção
								</p>
							</header>
						</div>

						<div className="bg-vsk-900 px-4 lg:py-16 py-8">
							<header>
								<span>
									<ISVGGlobalHandShake className="w-48 mx-auto" />
								</span>

								<h2 className="mt-4 text-2xl">
									Conta PJ
								</h2>

								<p className="text-gray-300 font-light text-sm lg:mt-12 mt-4 2xl:px-3">
									Conectando o seu mundo
									financeiro com a confiança
									extra que você precisa para
									ir mais longe, sem taxas e
									com ferramentas
									desenvolvidas para entender
									a necessidade do seu
									negócio.
								</p>
							</header>
						</div>
					</div>

					<div className="flex lg:flex-row flex-col gap-6 text-info justify-center items-center max-w-xl mt-12 lg:mt-32 mx-auto">
						<span>
							<p className="text-2xl">
								Ganhe MAIS tempo <br /> e uma nova
								RELAÇÃO FINANCEIRA COM O SEU
								NEGÓCIO.
							</p>
						</span>
						<span className="sm:w-auto w-full">
							<button className="btn btn-sm btn-info whitespace-nowrap rounded-none sm:w-auto w-full">
								Comece Agora
							</button>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section3Empresa;
