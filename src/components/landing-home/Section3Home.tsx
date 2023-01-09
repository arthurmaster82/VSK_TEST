import * as React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Section3Home: React.FC = () => {
	return (
		<section className="py-6 px-3 bg-vsk-900 relative">
			<div
				className="absolute container bg-info p-8 -top-12 md:block hidden"
				style={{ left: '50%', transform: 'translate(-50%, 0)' }}
			>
				<div className="flex md:flex-row flex-col gap-12 container py-8">
					<div className="flex flex-col justify-center">
						<h2 className="text-4xl lg:text-start text-center lg:text-6xl mb-12">
							Crie o seu Cartão Virtual
						</h2>

						<h6 className="text-2xl flex items-center gap-4">
							<span>
								Abra a sua conta e ative o seu
								cartão{' '}
							</span>{' '}
							<AiOutlineArrowRight />
						</h6>
					</div>

					<div className="mx-auto">
						<img
							src="/images/Celu2.png"
							alt="Celular"
							className="mx-auto"
						/>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="flex md:flex-row flex-col gap-12 md:gap-20 container md:pt-96 lg:mt-56 md:mt-12 py-16">
					<div className="mx-auto">
						<img
							src="/images/VSK_tarjeta_Negra.png"
							alt="Celular"
							className="mx-auto"
						/>
					</div>
					<div>
						<h2 className="text-4xl lg:text-start text-center text-gray-50 lg:text-7xl mb-4">
							Prefere seu <br /> cartão físico?
						</h2>

						<div className="flex md:justify-start justify-center items-center">
							<button className="btn btn-info btn-sm w-56  rounded-none text-start">
								<span>
									Eu quero cartão físico.
									Peça já o seu
								</span>

								<AiOutlineArrowRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section3Home;
