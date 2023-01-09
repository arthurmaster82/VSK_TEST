import * as React from 'react';
import ISVGIsoTipo from '../@common/Illustrations/ISVGIsoTipo';

interface ISection2EmpresaProps {}

const Section2Empresa: React.FunctionComponent<ISection2EmpresaProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-900 text-white relative">
			<div className="container py-16 lg:pb-72 lg:pt-32 relative">
				<h2 className="lg:text-4xl text-info font-bold text-2xl text-center">
					Seus objetivos são nossos objetivos. <br /> Simples assim.
				</h2>
				<div className="text-center max-w-2xl mx-auto mt-12">
					<p className="mb-6">
						Trabalhamos para garantir que cada projeto, não
						importa o quão grande ou pequeno seja, obtenha os
						recursos necessários para ter sucesso.
					</p>

					<p>
						Nós mudamos e o mundo mudou, é hora de dar um VSK
						MAIS no seu relacionamento bancário empresarial, com
						um nível de confiança extra de quem quer ir MAIS
						longe.
					</p>
				</div>
			</div>

			<div className="relative max-w-6xl mx-auto lg:block hidden">
				<span className="absolute -top-44 left-12">
					<ISVGIsoTipo className="w-10" strokeColor={'#e5e5e5'} />
				</span>
				<div className="absolute -bottom-24 z-20 w-9/12">
					<div className="p-10 bg-[#004959] flex items-end justify-between text-[#00E4EF] ml-12">
						<p className="text-2xl">
							Estamos aqui para apoiar <br /> uma nova
							geração <br /> de Empreendedores <br /> do
							novo mundo.
						</p>

						<button className="btn bg-[#00E4EF] btn-sm hover:bg-[#00b5be] text-black rounded-none">
							Comece Agora
						</button>
					</div>
				</div>

				<div className="absolute -bottom-36 z-10 container right-0">
					<img
						src="/images/Grupo 363.png"
						alt="Phone"
						className="w-96 ml-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default Section2Empresa;
