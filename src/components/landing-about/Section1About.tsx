import * as React from 'react';

interface ISection1AboutProps {}

const Section1About: React.FunctionComponent<ISection1AboutProps> = props => {
	const {} = props;
	return (
		<section
			className="min-h-screen flex items-center object-cover bg-no-repeat bg-cover"
			style={{ backgroundImage: 'url(/images/Artwork_Pag3.png)' }}
		>
			<div className="flex 2xl:ml-48 xl:ml-32 lg:ml-24 mx-auto md:flex-row flex-col gap-4 lg:pt-0 pt-6">
				<div className="flex px-4 max-w-2xl mx-auto flex-col items-center justify-center">
					<h2 className="text-2xl font-bold mb-4 w-full text-center lg:text-start">
						VSK MAIS VOCÊ
					</h2>

					<h6 className="mb-8 md:text-5xl text-3xl text-center lg:text-start">
						Chegamos para <br /> oferecer uma nova <br />{' '}
						experiência  <br /> financeira pessoal.
					</h6>
				</div>
			</div>
		</section>
	);
};

export default Section1About;
