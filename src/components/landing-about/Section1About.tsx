import * as React from 'react';

interface ISection1AboutProps {}

const Section1About: React.FunctionComponent<ISection1AboutProps> = props => {
	const {} = props;
	return (
		<section
			className="min-h-screen flex items-center object-cover bg-no-repeat bg-cover"
			style={{ backgroundImage: 'url(/images/Artwork_Pag3.png)' }}
		>
			<div className="flex lg:ml-96 mx-auto px-4 md:flex-row flex-col gap-12 md:gap-28 py-8">
				<div className="flex flex-col items-center justify-center">
					<h2 className="text-2xl font-bold mb-4 w-full lg:text-start text-center">
						VSK MAIS VOCÊ
					</h2>

					<h6 className="mb-8 md:text-5xl text-3xl lg:text-start text-center">
						Chegamos para <br /> oferecer uma nova <br />{' '}
						experiência de <br /> financeira pessoal.
					</h6>
				</div>
			</div>
		</section>
	);
};

export default Section1About;
