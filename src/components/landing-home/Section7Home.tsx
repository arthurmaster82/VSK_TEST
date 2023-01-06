import * as React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface ISection7HomeProps {}

const Section7Home: React.FunctionComponent<ISection7HomeProps> = props => {
	const {} = props;
	return (
		<div className="bg-black px-8 py-36">
			<div className="container text-center text-info text-3xl">
				<h2>
					Conecte-se com o seu mundo financeiro <br /> e tenha o
					controle das suas finanças <br /> na palma da sua mão.
				</h2>

				<span className="w-full flex text-2xl justify-center mt-6">
					<AiOutlineArrowRight className="md:ml-96" />
				</span>
			</div>
		</div>
	);
};

export default Section7Home;
