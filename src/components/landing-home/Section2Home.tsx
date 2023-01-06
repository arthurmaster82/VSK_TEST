import * as React from 'react';

interface ISection2HomeProps {}

const Section2Home: React.FunctionComponent<ISection2HomeProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-100">
			<div className="flex md:flex-row flex-col gap-12 md:gap-20 px-4 max-w-6xl mx-auto md:py-28 py-16">
				<div>
					<h2 className="text-2xl md:text-4xl lg:text-6xl mb-4">
						SEU CARTÃO <br /> DE CRÉDITO TRANSPARENTE.
					</h2>

					<h6 className="text-xl font-bold mb-8">
						FÍSICO E VIRTUAL.
					</h6>

					<p className="mb-8 font-light text-lg">
						Gerencie facilmente despesas, saldos, faturas,
						pagamentos e muito mais, com a transparência que o
						seu dinheiro merece.
					</p>

					<p className="text-info text-xl mb-8">Saiba mais</p>
					<p className="text-info text-3xl mb-8">
						Ganhe com o seu <br /> cartão de crédito
					</p>

					<button className="btn btn-info btn-sm rounded-none">
						Comece Agora
					</button>
				</div>

				<div>
					<img src="/images/Artetarjetas.png" alt="Celular" />
				</div>
			</div>
		</section>
	);
};

export default Section2Home;
