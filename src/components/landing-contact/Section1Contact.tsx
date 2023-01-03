import * as React from 'react';
import ISVGIsoTipo from '../@common/Illustrations/ISVGIsoTipo';

interface ISection1ContactProps {}

const Section1Contact: React.FunctionComponent<ISection1ContactProps> = props => {
	const {} = props;

	return (
		<div className="bg-vsk-900">
			<div className="relative overflow-hidden bg-vsk-900">
				<div className="w-full h-full overflow-hidden">
					<div className="h-full flex-wrap">
						<div className="flex items-center">
							<div className="text-white px-6 lg:px-12 container flex lg:flex-row flex-col items-center lg:py-36 pb-20 pt-12">
								<div className="xl:w-9/12 lg:w-[70%] font-grotesk lg:text-4xl text-xl lg:mb-0 mb-4 lg:text-start text-center font-bold">
									<h6 className="text-lg mb-4 xl:ml-6 2xl:ml-12">
										PARA EMPRESAS DE
										TODOS OS TAMANHOS
									</h6>
									<h5 className="2xl:text-5xl lg:text-4xl md:text-3xl text-xl py-2 tracking-tight border-y border-white">
										<span className="xl:ml-6 2xl:ml-12">
											Chegamos
											para
											oferecer
										</span>
									</h5>
									<h5 className="2xl:text-5xl lg:text-4xl md:text-3xl text-xl py-2 tracking-tight border-b border-white">
										<span className="xl:ml-6 2xl:ml-12">
											uma nova
											Experiência
											Financeira
										</span>
									</h5>

									<p className="mt-6 lg:mt-12 xl:ml-6 2xl:ml-12 text-sm sm:text-base max-w-lg font-normal">
										Seus objetivos são
										nossos objetivos.
										Simples assim.
										Trabalhamos para
										garantir que cada
										projeto, não importa
										o quão grande ou
										pequeno seja,
										obtenha os recursos
										necessários para ter
										sucesso.
									</p>
								</div>

								<span className="lg:ml-6 xl:ml-12 lg:mt-0 mt-6 lg:mb-24">
									<ISVGIsoTipo
										className="lg:w-44 w-28"
										strokeColor={
											'#f0f0f0'
										}
									/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section1Contact;
