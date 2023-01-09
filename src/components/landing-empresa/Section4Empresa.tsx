import * as React from 'react';
import { FaCircle } from 'react-icons/fa';

interface ISection4EmpresaProps {}

const Section4Empresa: React.FunctionComponent<ISection4EmpresaProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-100">
			<div className="py-16 lg:py-32 container">
				<h6 className="font-light">VSK MAIS CAPITAL DE CRESCIMENTO</h6>
				<h2 className="font-bold text-4xl mt-8">
					Chegamos para <br /> oferecer <br /> uma nova experiência{' '}
					<br /> financeira empresarial.
				</h2>

				<h2 className="text-xl mt-8">
					O capital necessário para financiar o desenvolvimento <br />{' '}
					de produtos ou turbinar seus projetos de crescimento.
				</h2>

				<div className="mt-12 grid lg:grid-cols-3 gap-y-2 gap-x-4 xl:gap-x-8">
					<div className="lg:px-4 lg:py-16 py-4">
						<header className="flex lg:flex-col flex-row lg:gap-0 gap-2 items-center lg:items-start">
							<h2 className="lg:mt-8 text-info text-sm">
								<FaCircle />
							</h2>

							<p className="text-slate-800 lg:mt-4 lg:text-base text-sm lg:pr-28 font-light">
								Não espere para receber as vendas no
								cartão de crédito. Antecipe seus
								recebíveis.
							</p>
						</header>
					</div>

					<div className="lg:px-4 lg:py-16 py-4">
						<header className="flex lg:flex-col flex-row lg:gap-0 gap-2 items-center lg:items-start">
							<h2 className="lg:mt-8 text-info text-sm">
								<FaCircle />
							</h2>

							<p className="text-slate-800 lg:mt-4 lg:text-base text-sm lg:pr-28 font-light">
								Os fornecedores também podem
								antecipar suas vendas feitas a
								prazo, sem cobrança de IOF
							</p>
						</header>
					</div>

					<div className="lg:px-4 lg:py-16 py-4">
						<header className="flex lg:flex-col flex-row lg:gap-0 gap-2 items-center lg:items-start">
							<h2 className="lg:mt-8 text-info text-sm">
								<FaCircle />
							</h2>

							<p className="text-slate-800 lg:mt-4 lg:text-base text-sm lg:pr-28 font-light">
								Financie sua produção sem
								burocracia, com taxas atrativas,
								seja você um distribuidor ou
								produtor.
							</p>
						</header>
					</div>

					<div className="lg:px-4 lg:py-16 py-4">
						<header className="flex lg:flex-col flex-row lg:gap-0 gap-2 items-center lg:items-start">
							<h2 className="lg:mt-8 text-info text-sm">
								<FaCircle />
							</h2>

							<p className="text-slate-800 lg:mt-4 lg:text-base text-sm lg:pr-28 font-light">
								O Open Finance é uma iniciativa do
								Banco Central do Brasil que está
								trazendo mais inovação para sistema
								financeiro. Com ele, você pode
								escolher compartilhar seus dados com
								os bancos e instituições financeiras
								que quiser.
							</p>
						</header>
					</div>

					<div className="lg:px-4 lg:py-16 py-4">
						<header className="flex lg:flex-col flex-row lg:gap-0 gap-2 items-center lg:items-start">
							<h2 className="lg:mt-8 text-info text-sm">
								<FaCircle />
							</h2>

							<p className="text-slate-800 lg:mt-4 lg:text-base text-sm lg:pr-28 font-light">
								Quanto melhor eles conhecerem você e
								as suas necessidades, melhores serão
								os produtos e serviços financeiros
								oferecidos.
							</p>
						</header>
					</div>

					<div className="lg:px-4 lg:py-16 py-4">
						<header className="flex lg:flex-col flex-row lg:gap-0 gap-2 items-center lg:items-start">
							<h2 className="lg:mt-8 text-info text-sm">
								<FaCircle />
							</h2>

							<p className="text-slate-800 lg:mt-4 lg:text-base text-sm lg:pr-28 font-light">
								Com a transparência de dados do Open
								Finance, é possível criar produtos e
								ofertas mais competitivos, com
								condições melhores e personalizadas
								para cada cliente, como tarifas mais
								baixas.
							</p>
						</header>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section4Empresa;
