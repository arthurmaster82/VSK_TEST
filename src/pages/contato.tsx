import NextHead from '@/components/@common/next-head';
import Container from '@/templates/Container';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as React from 'react';

const Section1Contact = dynamic(() => import('@/components/landing-contact/Section1Contact'));
const Section2Contact = dynamic(() => import('@/components/landing-contact/Section2Contact'));
const FormContact = dynamic(() => import('@/components/landing-contact/FormContact'));
const Section3Contact = dynamic(() => import('@/components/landing-contact/Section3Contact'));
interface IContatoProps {}

const Contato: NextPage<IContatoProps> = props => {
	const {} = props;
	return (
		<Container>
			<NextHead title={'Contato'} description={'Contato'} />
			<Section1Contact />
			<Section2Contact />
			<FormContact />
			<Section3Contact />
		</Container>
	);
};

export default Contato;
