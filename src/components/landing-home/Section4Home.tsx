import * as React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface ISection4HomeProps {}

const Section4Home: React.FunctionComponent<ISection4HomeProps> = props => {
	const {} = props;
	return (
		<section id={'empresarial'}>
			<div className="bg-vsk-50">
				<div className="container flex md:flex-row flex-col justify-center">
					<div>
						<img src="/images/Artwork_Pag2.png" alt="Celular" />
					</div>
					<div className="w-full">
						<div className="container max-w-2xl mx-0 py-12">
							<h6 className="text-xl lg:text-start text-center text-info mb-4">
								Para Sua Empresa I Conta PJ
							</h6>

							<h3 className="text-3xl md:text-5xl py-6">
								Para empresas <br /> com desejos{' '}
								<br /> financeiros ambiciosos.
							</h3>

							<p className="text-lg mb-8">
								Chegamos para apoiar uma nova
								geração de empreendedores e empresas
								do novo mundo que desejam
								impulsionar o crescimento da
								economia global.
							</p>

							<p className="text-lg">
								Nós mudamos e o mundo mudou, é hora
								de dar um Vsk Mais no seu
								relacionamento bancário empresarial,
								com um nível de confiança extra de
								quem quer ir mais longe.
							</p>

							<div className="w-full">
								<p className="text-sm mt-6 lg:mt-8">
									Experimente a diferença!
								</p>

								<button className="btn mt-1 btn-sm bg-[#004959] hover:bg-[#006a81] duration-150 transition text-info rounded-none">
									Comece Agora{' '}
									<AiOutlineArrowRight />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section4Home;
