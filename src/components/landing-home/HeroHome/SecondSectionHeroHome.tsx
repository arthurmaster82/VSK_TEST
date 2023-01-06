import * as React from 'react';

interface ISecondSectionHeroHomeProps {}

const SecondSectionHeroHome: React.FunctionComponent<ISecondSectionHeroHomeProps> = props => {
	const {} = props;
	return (
		<div className="md:pb-36 pb-8 container text-center text-info font-bold md:text-5xl text-2xl">
			UM BANCO DE SOLUÇÕES <br /> E PRODUTOS CONSTRUÍDOS <br /> COM FOCO EM VOCÊ.
		</div>
	);
};

export default SecondSectionHeroHome;
