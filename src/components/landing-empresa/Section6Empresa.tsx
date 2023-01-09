import * as React from 'react';

interface ISection6EmpresaProps {}

const Section6Empresa: React.FunctionComponent<ISection6EmpresaProps> = props => {
	const {} = props;
	return (
		<section className="relative bg-vsk-900">
			<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-16 md:py-24">
				<div className="text-white lg:col-span-2">
					<h6 className="font-light mb-8">VSK MAIS SEGUROS</h6>
					<h2 className="text-2xl md:text-3xl font-bold mb-8 text-info">
						Proteja o seu negócio em todas <br /> as situações e
						garanta mais tranquilidade <br /> para o futuro da
						sua empresa.
					</h2>

					<p className="text-slate-300 text-sm">
						Proteja o seu negócio em todas as situações e
						garanta mais tranquilidade para o futuro da sua
						empresa. Grande parte dos empreendedores de pequenas
						e médias empresas têm seu negócio como única fonte
						de renda, por isso, é muito importante incluir um
						seguro no seu planejamento financeiro anual para
						continuar com o seu negócio mesmo em caso de
						imprevistos, sem comprometer os recursos e o
						patrimônio da sua empresa.
					</p>

					<button className="btn btn-info rounded-none mt-8 btn-sm">
						Comece Agora
					</button>
				</div>

				<div>
					<img
						src="/images/Grupo 364.png"
						alt="Security"
						className={'w-96 mx-auto'}
					/>
				</div>
			</div>
		</section>
	);
};

export default Section6Empresa;
