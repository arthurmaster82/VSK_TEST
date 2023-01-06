import { colors } from '@/utils/colors';
import * as React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ISVGChat from '../@common/Illustrations/ISVGChat';
import ISVGLogotipo from '../@common/Illustrations/ISVGLogoTipo';
import ISVGLogout from '../@common/Illustrations/ISVGLogout';
import ISVGPointer from '../@common/Illustrations/ISVGPointer';

interface ISection6HomeProps {}

const Section6Home: React.FunctionComponent<ISection6HomeProps> = props => {
	const {} = props;
	return (
		<div className="bg-vsk-100 px-8 py-36">
			<div className="px-4 max-w-6xl mx-auto">
				<h2 className="md:text-4xl lg:text-6xl text-3xl mb-8 font-bold">
					Você e o seu negócio <br /> em um só lugar.
				</h2>
				<h6 className="md:text-xl text-lg mb-12">
					Economize tempo e dinheiro ao assumir o controle das suas
					finanças.
				</h6>

				<h4 className="md:text-3xl text-2xl mb-16 md:mb-36 lg:flex lg:gap-2 lg:items-center">
					Conecte com o seu mundo financeiro na{' '}
					<span>
						<ISVGLogotipo className="w-20" />
					</span>
				</h4>

				<div className="grid lg:grid-cols-3 grid-cols-1 gap-12 text-center">
					<div>
						<h6 className="text-sm">
							<ISVGChat
								className="w-36 mx-auto mb-8"
								strokeColorText={colors.black}
								strokeColor={colors.wallVSK}
							/>
						</h6>

						<h4 className="text-2xl">
							Consulte um conselheiro
						</h4>

						<p className="mt-4 mb-6">
							A consulta individual que trará aquele nível
							extra de confiança para você ir mais longe
						</p>

						<span className="text-info flex items-center justify-center cursor-pointer transition duration-150 hover:text-infoHover gap-2">
							<span>Comece Agora</span>

							<AiOutlineArrowRight />
						</span>
					</div>
					<div>
						<h6 className="text-sm">
							<ISVGLogout
								className="w-36 mx-auto mb-8"
								strokeColor={colors.black}
							/>
						</h6>

						<h4 className="text-2xl">Vá mais longe</h4>

						<p className="mt-4 mb-6">
							Assuma o controle das suas finanças e
							gerencie os fundos operacionais do seu
							próprio negócio.
						</p>

						<span className="text-info flex items-center justify-center cursor-pointer transition duration-150 hover:text-infoHover gap-2">
							<span>Comece Agora</span>

							<AiOutlineArrowRight />
						</span>
					</div>
					<div>
						<h6 className="text-sm">
							<ISVGPointer
								className="w-36 mx-auto mb-8"
								strokeColor={colors.black}
							/>
						</h6>

						<h4 className="text-2xl">
							Experimente a diferença
						</h4>

						<p className="mt-4 mb-6">
							Diversifique, determine e impulsione sua
							vida financeira nessa nova jornada.
						</p>

						<span className="text-info flex items-center justify-center cursor-pointer transition duration-150 hover:text-infoHover gap-2">
							<span>Comece Agora</span>

							<AiOutlineArrowRight />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section6Home;
