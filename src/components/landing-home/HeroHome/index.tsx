import * as React from 'react';
import FirstSectionHeroHome from './FirstSectionHeroHome';
import FourSectionHeroHome from './FourSectionHeroHome';
import SecondSectionHeroHome from './SecondSectionHeroHome';
import ThirdSectionHeroHome from './ThirdSectionHeroHome';

interface IHeroHomeProps {}

const HeroHome: React.FunctionComponent<IHeroHomeProps> = props => {
	const {} = props;
	return (
		<div className="bg-vsk-900">
			<div className="relative overflow-hidden bg-vsk-800">
				<div className="w-full h-full overflow-hidden">
					<div className="h-full flex-wrap">
						<FirstSectionHeroHome />

						<SecondSectionHeroHome />

						<ThirdSectionHeroHome />

						<FourSectionHeroHome />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroHome;
