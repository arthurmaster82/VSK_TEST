import { Link } from 'react-scroll';
import * as React from 'react';

interface IFourSectionHeroHomeProps {}

const FourSectionHeroHome: React.FunctionComponent<IFourSectionHeroHomeProps> = props => {
	const {} = props;
	return (
		<div className="md:py-28 py-10 container text-center text-white">
			<h5 className="font-bold md:text-3xl text-xl">
				¿Que experiência você gostaria de viver hoje?
			</h5>

			<div className="flex text-info bg-vsk-900 border-y md:text-2xl text-sm border-info rounded-2xl mt-8">
				<Link
					smooth
					duration={600}
					to="pessoal"
					className="border-l border-info p-4 rounded-3xl rounded-tr-none rounded-br-none w-full hover:bg-slate-700 cursor-pointer transition duration-150"
				>
					Pessoal
				</Link>

				<span className="w-0.5 my-4 bg-info"></span>

				<Link
					smooth
					duration={600}
					to="empresarial"
					className="w-full border-r border-info p-4 rounded-tl-none rounded-bl-none rounded-3xl hover:bg-slate-700 cursor-pointer transition duration-150"
				>
					Empresarial
				</Link>
			</div>
		</div>
	);
};

export default FourSectionHeroHome;
