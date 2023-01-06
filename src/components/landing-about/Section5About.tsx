import { colors } from '@/utils/colors';
import * as React from 'react';
import ISVGShieldCartVSK from '../@common/Illustrations/ISVGShieldCartVSK';
import ISVGShieldHeartVSK from '../@common/Illustrations/ISVGShieldHeartVSK';
import ISVGShieldUserVSK from '../@common/Illustrations/ISVGShieldUserVSK';

interface ISectio5AboutProps {}

const Sectio5About: React.FunctionComponent<ISectio5AboutProps> = props => {
	const {} = props;
	return (
		<div className="py-16">
			<div className="max-w-6xl px-4 mx-auto">
				<div className="max-w-4xl mx-auto md:mb-32 mb-16">
					<h2 className="md:text-4xl text-3xl mb-8 font-bold text-center">
						Cuide do que <br /> realmente importa!
					</h2>
					<h6 className="md:text-xl text-lg mb-12 text-center">
						Invista na tranquilidade de saber que o seu
						patrimônio está protegido, que a sua família tem
						suporte financeiro para qualquer eventualidade e que
						seu negócio está livre de prejuízos inesperados.
					</h6>
				</div>

				<div className="grid lg:grid-cols-2 grid-cols-1 gap-12 text-center">
					<div>
						<h6 className="text-sm">
							<ISVGShieldHeartVSK
								className="w-36 mx-auto mb-4"
								strokeColor={colors.black}
							/>
						</h6>

						<p className="mb-6 text-sm font-light">
							Um Seguro de Vida 100% online e com a
							proteção na medida certa para todas as fases
							da sua vida. Você pode combinar diferentes
							coberturas, de acordo com a sua necessidade
							de proteção, além de assegurar o bem-estar
							da sua família, com a garantia de um amparo
							financeiro em momentos desafiadores.
						</p>
					</div>
					<div>
						<h6 className="text-sm">
							<ISVGShieldUserVSK
								className="w-32 mx-auto mb-4"
								strokeColor={colors.black}
							/>
						</h6>

						<p className="lg:mt-7 mt-4 text-sm font-light">
							Você pode começar aplicando R$100,00,
							contando com a praticidade de fazer sua
							própria gestão financeira em um só lugar.
							Isso porque pode acessar em um único APP sua
							conta de investimentos e sua conta corrente.
						</p>
					</div>
					<div className="lg:col-span-2 lg:w-1/2 mx-auto">
						<h6 className="text-sm">
							<ISVGShieldCartVSK
								className="w-36 mx-auto mb-0"
								strokeColor={colors.black}
							/>
						</h6>

						<p className="mt-4 text-sm font-light">
							Assim fica ainda mais fácil movimentar o seu
							dinheiro no dia a dia e sempre que precisar,
							podendo também resgatar seus investimentos
							no VSK MAIS para ter recursos disponíveis na
							sua conta em instantes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sectio5About;
