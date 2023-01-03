import NextHead from '@/components/@common/next-head';
import Container from '@/templates/Container';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as React from 'react';

interface IEmpresaProps {}

const Section1Empresa = dynamic(() => import('@/components/landing-empresa/Section1Empresa'));
const Section2Empresa = dynamic(() => import('@/components/landing-empresa/Section2Empresa'));
const Section3Empresa = dynamic(() => import('@/components/landing-empresa/Section3Empresa'));
const Section4Empresa = dynamic(() => import('@/components/landing-empresa/Section4Empresa'));
const Section5Empresa = dynamic(() => import('@/components/landing-empresa/Section5Empresa'));
const Section6Empresa = dynamic(() => import('@/components/landing-empresa/Section6Empresa'));
const Section7Empresa = dynamic(() => import('@/components/landing-empresa/Section7Empresa'));
const Section8Empresa = dynamic(() => import('@/components/landing-empresa/Section8Empresa'));
const Section9Empresa = dynamic(() => import('@/components/landing-empresa/Section9Empresa'));

const Empresa: NextPage<IEmpresaProps> = props => {
	const {} = props;
	return (
		<Container>
			<NextHead title={'Empresa'} description={'Empresa'} />
			<Section1Empresa />
			<Section2Empresa />
			<Section3Empresa />
			<Section4Empresa />
			<Section5Empresa />
			<Section6Empresa />
			<Section7Empresa />
			<Section8Empresa />
			<Section9Empresa />
		</Container>
	);
};

export default Empresa;
