import * as React from 'react';
import { colors } from '@/utils/colors';
import ISVGCreditCard from '../@common/Illustrations/ISVGCreditCard';

interface ISectio3AboutProps {}

const Sectio3About: React.FunctionComponent<ISectio3AboutProps> = props => {
	const {} = props;
	return (
		<section className="bg-vsk-100">
			<div className="container py-16 lg:pt-44">
				<h2 className="lg:text-4xl font-bold text-2xl text-center">
					Gerencie todas as finanças <br /> em um só lugar
				</h2>
				<h6 className="lg:text-2xl text-xl text-center mt-8">
					Assuma o Controle
				</h6>

				<div className="flex flex-col justify-center items-center gap-16 mt-10">
					<div className="flex md:gap-4 gap-2 items-center max-w-xl">
						<div>
							<ISVGCreditCard
								className="w-24"
								strokeColor={colors.black}
							/>
						</div>
						<div className="md:text-sm text-xs font-light">
							Crie cartões virtuais ilimitados,
							personalizados, com limite de gastos diários
							ou mensais, e gerencie todas as transações
							na tela do seu celular, com a certeza que
							está usufruindo de tudo que pode.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sectio3About;
