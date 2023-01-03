import NextHead from '@/components/@common/next-head';
import TermosDeUsoContent from '@/components/terms-of-use';
import Container from '@/templates/Container';
import { NextPage } from 'next';
import * as React from 'react';

interface ITermosDeUsoProps {}

const TermosDeUso: NextPage<ITermosDeUsoProps> = props => {
	const {} = props;
	return (
		<Container>
			<NextHead title={'Terms of Use'} description={'Terms of Use'} />
			<TermosDeUsoContent />
		</Container>
	);
};

export default TermosDeUso;
