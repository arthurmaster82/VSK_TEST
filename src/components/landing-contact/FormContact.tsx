import * as React from 'react';

interface IFormContactProps {}

const FormContact: React.FunctionComponent<IFormContactProps> = props => {
	const {} = props;
	return (
		<section className="py-20 bg-vsk-900">
			<div className="max-w-4xl mx-auto px-4">
				<h4 className="text-info text-xl">NOSSA FILOSOFIA</h4>

				<p className="text-white text-lg mt-4">
					Todo projeto tem sua personalidade própria e nós recebemos
					cada desafio com a energia renovada e inspiração, para que
					você conquiste seus melhores resultados.
				</p>
			</div>

			<div className="max-w-2xl mx-auto px-4 my-12">
				<div className="tile lg:px-8">
					<h2 className="text-center text-info text-2xl">
						Quer mais informações?
					</h2>

					<div className="form-group mt-8">
						<label htmlFor="" className="label-input"></label>
						<input
							type="text"
							className="form-control form-control-sm form-control-dark"
							placeholder="Nome Completo"
						/>
					</div>

					<div className="form-group">
						<input
							type="text"
							className="form-control form-control-sm form-control-dark"
							placeholder="E-Mail"
						/>
					</div>

					<div className="form-group mb-6 mt-4">
						<textarea
							placeholder="Mensagem"
							className="form-control form-control-sm form-control-dark"
							cols={10}
							rows={7}
						/>
					</div>

					<div className="text-right">
						<button className="btn btn-info btn-sm rounded-none">
							Entre em Contato
						</button>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center sm:gap-6 gap-3 sm:flex-row flex-col">
				<span className="text-info text-xl">
					Venha nos ver <br /> pessoalmente
				</span>

				<span className="text-slate-300 text-sm">
					Rio de Janeiro, Rio de Janeiro, Brasil <br /> Contate-nos{' '}
					<br /> info@vskholdings.co <br /> + 55 21 999999999
				</span>
			</div>
		</section>
	);
};

export default FormContact;
