import * as React from 'react';

interface ISection2ContactProps {}

const Section2Contact: React.FunctionComponent<ISection2ContactProps> = props => {
	const {} = props;

	return (
		<section className="bg-vsk-900 lg:py-0 pb-12">
			<div className="grid lg:grid-cols-12 lg:gap-24">
				<div className="xl:col-span-5 col-span-6 lg:block hidden">
					<img src="/images/Graphic_Dots.png" alt="" />
				</div>
				<div className="lg:col-span-6 px-4 text-white lg:max-w-2xl w-full 2xl:max-w-4xl lg:text-start text-center">
					<h2 className="xl:mt-8 sm:text-xl 2xl:text-4xl lg:text-start text-center text-lg">
						ESTAMOS AQUI PARA APOIAR <br /> UMA NOVA GERAÇÃO DE
						EMPREENDEDORES <br /> E EMPRESAS DO NOVO MUNDO.
					</h2>

					<h6 className="text-info mt-6">
						VOCÊ NO CONTROLE DE TODAS AS SUAS FINANÇAS
					</h6>

					<div className="mt-6 2xl:mt-12 max-w-xl lg:mx-0 mx-auto">
						<div className="mb-8">
							<h6 className="text-lg mb-3">CONTA PJ</h6>

							<p className="font-light text-gray-400 text-base">
								Conectando o seu mundo financeiro
								com a confiança extra que você
								precisa para ir mais longe, sem
								taxas e com ferramentas
								desenvolvidas para entender a
								necessidade do seu negócio.
							</p>
						</div>

						<div className="mb-8">
							<h6 className="text-lg mb-3">
								ASSUMA O CONTROLE
							</h6>

							<p className="font-light text-gray-400 text-base">
								Economize tempo e dinheiro ao
								assumir o controle de suas finanças,
								receber pagamentos mais rapidamente
								e acessar capital para financiar seu
								crescimento.
							</p>
						</div>

						<div className="mb-8">
							<h6 className="text-lg mb-3">
								CAPITAL DE CRESCIMENTO
							</h6>

							<p className="font-light text-gray-400 text-base">
								O capital necessário para financiar
								o desenvolvimento de produtos ou
								turbinar seus projetos de
								crescimento.
							</p>
						</div>

						<div className="mb-8">
							<h6 className="text-lg mb-3">TEMPO</h6>

							<p className="font-light text-gray-400 text-base">
								Ganhe MAIS tempo para investir na
								criatividade do que fazer e gaste
								menos tempo pensando em como fazer.
							</p>
						</div>

						<div className="mb-8">
							<h6 className="text-lg mb-3">CARTÃO PJ</h6>

							<p className="font-light text-gray-400 text-base">
								Virtual e físico , sem anuidades e
								sem tarifas escondidas. Notificações
								de compras em tempo real, definição
								de limite de gastos por mês, pensado
								para o seu negócio, com atendimento
								24hr.
							</p>
						</div>

						<div className="mb-8">
							<h6 className="text-lg mb-3">
								GESTÃO DE COBRANÇAS﻿
							</h6>

							<p className="font-light text-gray-400 text-base">
								Virtual e físico , sem anuidades e
								sem tarifas escondidas. Notificações
								de compras em tempo real, definição
								de limite de gastos por mês, pensado
								no seu negócio, com atendimento
								24hr.
							</p>
						</div>

						<div className="mb-8">
							<h6 className="text-lg mb-3">
								COMPROMISSO
							</h6>

							<p className="font-light text-gray-400 text-base">
								Nós entregamos o que prometemos e
								fazemos um esforço extra para trazer
								facilidade e liberdade financeira
								para o seu negócio, exigindo mais de
								nós mesmos do que nossos clientes.
							</p>
						</div>

						<div className="flex items-center justify-end">
							<button className="btn btn-info lg:px-12 px-6 rounded-none btn-sm">
								Comece Agora
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2Contact;
