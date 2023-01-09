import * as React from 'react';

interface ISectio2AboutProps {}

const Sectio2About: React.FunctionComponent<ISectio2AboutProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-900">
			<div className="py-20 lg:pb-48 lg:pt-32">
				<div className="grid lg:grid-cols-2 lg:gap-16 gap-8 max-w-4xl mx-auto px-4">
					<div>
						<h2 className="text-white mb-8 md:text-4xl text-3xl lg:text-start text-center">
							Quanto tempo <br /> você gasta tentando{' '}
							<br />
							lidar com:
						</h2>

						<h6 className="text-info text-xl md:text-2xl lg:text-start text-center">
							“COMO IREI RESOLVER <br /> ISSO HOJE?”
						</h6>
					</div>
					<div>
						<p className="font-light text-sm text-white">
							Se está procurando algo que lhe dê
							perspectivas e ferramentas para MUDAR a sua
							relação com o dinheiro e com o seu futuro
							financeiro, estamos aqui para contribuir com
							VOCÊ. <br /> <br /> Reconhecemos que VOCÊ é
							a fonte de criação da sua própria realidade
							financeira, por isso queremos ajudar a
							compactar solucões que funcionam PARA VOCÊ,
							trazendo total autonomia sobre as escolhas
							que só VOCÊ pode fazer como receber,
							guardar, usar ou fazer render o seu dinheiro
							com MAIS liberdade e MAIS clareza
							financeira.
						</p>
					</div>
				</div>

				<div className="lg:mt-36 mt-16 max-w-4xl mx-auto px-4">
					<h2 className="text-center text-white lg:text-4xl md:text-3xl text-2xl font-bold">
						VOCÊ ESTÁ DISPOSTO <br /> A VIVER A AVENTURA DE
						CRIAR <br /> UMA NOVA REALIDADE?
					</h2>

					<h6 className="text-center text-info lg:text-4xl text-2xl mt-12 font-bold">
						Então, vamos começar!
					</h6>
				</div>

				<div className="grid md:grid-cols-2 md:gap-16 gap-8 md:mt-20 mt-12 items-center">
					<div>
						<img
							src="/images/ControleFinanzas.png"
							alt="Finanzas"
						/>
					</div>
					<div className="max-w-xl px-4">
						<p className="text-gray-300 text-sm lg:text-base font-light">
							Administre de forma fluida e direta seus
							pagamentos, transferências, compras online,
							recargas de celular, cobranças e
							recebimentos de um jeito MAIS rápido,
							simples, sem burocracia, sem perder tempo e
							sem taxas escondidas, de uma forma segura,
							clara, fácil e disponível 24 horas pra VOCÊ
						</p>
					</div>
				</div>
			</div>

			<div className="relative mx-auto">
				<div className="absolute lg:block hidden right-0 2xl:left-0 -left-28 -bottom-24 z-20 w-[65%] 2xl:w-[50%] mx-auto">
					<div className="p-24 bg-[#004959] flex items-end justify-between text-[#00E4EF] ml-12">
						<p className="text-2xl">
							O SEU MUNDO FINANCEIRO <br /> NA PALMA DA
							SUA MÃO!
						</p>

						<button className="btn bg-[#00E4EF] btn-sm hover:bg-[#00b5be] text-black rounded-none">
							Comece Agora
						</button>
					</div>
				</div>

				<div className="absolute lg:block hidden -bottom-32 z-10 container -right-28 left-0">
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

export default Sectio2About;
