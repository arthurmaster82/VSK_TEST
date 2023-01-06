import NextHead from '@/components/@common/next-head';
import Section7Home from '@/components/landing-home/Section7Home';
import Container from '@/templates/Container';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as React from 'react';

const Section1About = dynamic(() => import('@/components/landing-about/Section1About'));
const Section2About = dynamic(() => import('@/components/landing-about/Section2About'));
const Section3About = dynamic(() => import('@/components/landing-about/Section3About'));
const Section4About = dynamic(() => import('@/components/landing-about/Section4About'));
const Section5About = dynamic(() => import('@/components/landing-about/Section5About'));
const Section6About = dynamic(() => import('@/components/landing-about/Section6About'));
const Section7About = dynamic(() => import('@/components/landing-about/Section7About'));


interface IParaVoceProps {}

const ParaVoce: NextPage<IParaVoceProps> = props => {
	const {} = props;
	return (
		<Container>
			<NextHead title={'Para Voce'} description={'Para Voce'} />
			<Section1About />
			<Section2About />
			<Section3About />
			<Section4About />
			<Section5About />
			<Section6About />
			<Section7About />
			<Section7Home />
		</Container>
	);
};

export default ParaVoce;
