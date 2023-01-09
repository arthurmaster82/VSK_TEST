import * as React from 'react';
import { BiCircle } from 'react-icons/bi';

interface ISection8EmpresaProps {}

const Section8Empresa: React.FunctionComponent<ISection8EmpresaProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-100 lg:py-0 pb-12">
			<div className="grid lg:grid-cols-12 lg:gap-24">
				<div className="col-span-4 lg:block hidden">
					<img src="/images/Graphic_Dots.png" alt="" />
				</div>
				<div className="lg:col-span-7 px-4 lg:max-w-2xl w-full 2xl:max-w-4xl lg:text-start text-center">
					<ul className="gap-3 flex flex-col mt-8 2xl:mt-20 text-lg 2xl:text-xl">
						<li className="flex items-center text-start sm:text-base text-sm font-light">
							<span className="flex gap-1 items-center">
								<BiCircle className="text-xs" />
								<span>
									Sistema de pagamentos em um
									só lugar
								</span>
							</span>
						</li>
						<li className="flex items-center text-start sm:text-base text-sm font-light">
							<span className="flex gap-1 items-center">
								<BiCircle className="text-xs" />
								<span>Sem mensalidade</span>
							</span>
						</li>
						<li className="flex items-center text-start sm:text-base text-sm font-light">
							<span className="flex gap-1 items-center">
								<BiCircle className="text-xs" />
								<span>Integração via API</span>
							</span>
						</li>
						<li className="flex items-center text-start sm:text-base text-sm font-light">
							<span className="flex gap-1 items-center">
								<BiCircle className="text-xs" />
								<span>Gestão de assinaturas</span>
							</span>
						</li>
						<li className="flex items-center text-start sm:text-base text-sm font-light">
							<span className="flex gap-1 items-center">
								<BiCircle className="text-xs" />
								<span>Cobrança recorrente</span>
							</span>
						</li>
						<li className="flex items-center text-start sm:text-base text-sm font-light">
							<span className="flex gap-1 items-center">
								<BiCircle className="text-xs" />
								<span>
									Diversos métodos de
									pagamento
								</span>
							</span>
						</li>
						<li className="flex items-center text-start sm:text-base text-sm font-light">
							<span className="flex gap-1 items-center">
								<BiCircle className="text-xs" />
								<span>
									Tokenização para pagamentos
									em um clique
								</span>
							</span>
						</li>
					</ul>

					<p className="mt-8 sm:text-xl 2xl:text-2xl text-start text-sm">
						Customize com o nome da sua empresa <br /> na fatura
						do cartão de crédito, <br /> ajudando o seu cliente
						a reconhecer <br /> a cobrança e assim evitar
						chargebacks.
					</p>
				</div>
			</div>

			<div className="relative mx-auto">
				<div className="absolute lg:block hidden -bottom-24 z-20 w-[75%] 2xl:w-[82.5%] mx-auto">
					<div className="p-20 bg-[#004959] flex items-end justify-between text-[#00E4EF] ml-12">
						<p className="text-2xl">
							Uma forma prática de receber pagamentos a
							distância, <br /> mesmo sem possuir uma loja
							virtual, <br /> Crie seus links de pagamento
							e envie para seus clientes, <br /> via
							Facebook, Instagram, WhatsApp, E-mail etc.
						</p>

						<button className="btn bg-[#00E4EF] btn-sm hover:bg-[#00b5be] text-black rounded-none">
							Comece Agora
						</button>
					</div>
				</div>

				<div className="absolute lg:block hidden -bottom-32 z-10 container right-0">
					<img
						src="/images/VSK_imagen_Mobile_Blur.png"
						alt="Phone"
						className="w-96 ml-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default Section8Empresa;
