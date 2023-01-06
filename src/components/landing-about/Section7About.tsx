import { colors } from '@/utils/colors';
import * as React from 'react';
import ISVGArrowsGrowing from '../@common/Illustrations/ISVGArrowsGrowing';
import ISVGArrowsGrowingAlt from '../@common/Illustrations/ISVGArrowsGrowingAlt';
import ISVGPhoneConfigDollar from '../@common/Illustrations/ISVGPhoneConfigDollar';

interface ISectio7AboutProps {}

const Sectio7About: React.FunctionComponent<ISectio7AboutProps> = props => {
	const {} = props;
	return (
		<div className="py-16">
			<div className="max-w-6xl px-4 mx-auto">
				<div className="max-w-4xl mx-auto md:mb-32 mb-16">
					<h2 className="md:text-4xl text-3xl mb-8 font-bold text-center">
						A VSK MAIS tem <br /> fundos de investimento <br />{' '}
						para TODOS os perfis.
					</h2>
					<h6 className="md:text-xl text-lg mb-12 text-center">
						Fundos de ações, fundos multimercado, fundos
						cambiais, fundos de crédito privado, fundos com
						liquidez imediata ou para quem quer investir por um
						tempo mais prolongado. 
					</h6>
				</div>

				<div className="grid lg:grid-cols-3 grid-cols-1 gap-12 text-center">
					<div>
						<h6 className="text-sm">
							<ISVGArrowsGrowing
								className="w-36 mx-auto mb-8"
								strokeColor={colors.wallVSK}
							/>
						</h6>

						<p className="mt-9 mb-6 text-sm font-light">
							Invista a partir de R$ 100 e resgate sempre
							que precisar com apenas alguns cliques
						</p>
					</div>
					<div>
						<h6 className="text-sm">
							<ISVGPhoneConfigDollar
								className="w-32 mx-auto mb-4"
								strokeColor={colors.black}
							/>
						</h6>

						<p className="mt-5 mb-6 text-sm font-light">
							Você pode começar a aplicar a partir de R$
							100 enquanto conta com a praticidade de
							fazer a sua gestão financeira em um só
							lugar. Isso porque em um único app você
							consegue acessar a conta de investimentos e
							a conta corrente.
						</p>
					</div>
					<div>
						<h6 className="text-sm">
							<ISVGArrowsGrowingAlt
								className="w-36 mx-auto mb-0"
								strokeColor={colors.black}
							/>
						</h6>

						<p className="mt-4 mb-6 text-sm font-light">
							Assim, fica ainda mais fácil movimentar o
							seu dinheiro no dia a dia. Sempre que
							precisar, você também pode resgatar os seus
							investimentos no VSK MAIS para ter os
							recursos disponíveis na sua conta em
							instantes*.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sectio7About;
