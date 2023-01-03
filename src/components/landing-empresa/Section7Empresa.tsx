import * as React from 'react';
import ISVGCogVSK from '../@common/Illustrations/ISVGCogVSK';
import ISVGPencilPaperVSK from '../@common/Illustrations/ISVGPencilPaperVSK';
import ISVGUserMoneyVSK from '../@common/Illustrations/ISVGUserMoneyVSK';

interface ISection7EmpresaProps {}

const Section7Empresa: React.FunctionComponent<ISection7EmpresaProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-100">
			<div className="max-w-7xl mx-auto px-4 pt-16 lg:py-24 container">
				<h6 className="font-thin">VSK MAIS PAGUE</h6>

				<h2 className="mt-6 text-3xl font-bold">Venda mais segurança</h2>

				<p className="max-w-xl font-light mt-8 mb-4">
					VSK MAIS PAGUE é uma solução completa para sua empresa
					receber pagamentos via cartão de crédito, boleto e PIX, e
					pode ser integrado a lojas virtuais, aplicativos, ERPs e
					outros sistemas.
				</p>

				<p className="max-w-xl font-thin">
					Você pode criar links de pagamento e cobranças recorrentes
					diretamente no nosso app.
				</p>

				<h3 className="text-center font-bold text-3xl my-12 lg:mt-20">
					Como funciona?
				</h3>

				<div className="grid lg:grid-cols-3 lg:gap-24 gap-8 lg:mt-16 mt-12">
					<div>
						<div>
							<ISVGPencilPaperVSK className="w-36 mx-auto" />
						</div>

						<h3 className="text-center text-xl lg:mt-8 mt-4">
							Sua empresa estabelece contrato com a VSK
							MAIS
						</h3>
					</div>
					<div>
						<div>
							<ISVGCogVSK className="w-36 mx-auto" />
						</div>

						<h3 className="text-center text-xl lg:mt-12 mt-6">
							Processamos seus pagamentos por Cartão de
							Crédito, Boleto e PIX
						</h3>
					</div>
					<div>
						<div>
							<ISVGUserMoneyVSK className="w-36 mx-auto" />
						</div>

						<h3 className="text-center text-xl lg:mt-14 mt-8">
							Você recebe os valores diretamente na sua
							conta bancária
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section7Empresa;
