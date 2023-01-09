import * as React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface ISection3ContactProps {}

const Section3Contact: React.FunctionComponent<ISection3ContactProps> = props => {
	const {} = props;

	return (
		<div className="bg-black px-8 py-36">
			<div className="container text-center text-white text-3xl">
				<h2>
					Abra agora a sua conta VSK, <br /> ative seu cartão virtual
					e <span className="text-info">Seja Mais.</span>
				</h2>

				<span className="w-full flex text-2xl justify-center mt-6 text-info">
					<AiOutlineArrowRight className="md:ml-96" />
				</span>
			</div>
		</div>
	);
};

export default Section3Contact;
