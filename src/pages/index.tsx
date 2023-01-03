import NextHead from '@/components/@common/next-head';
import Container from '@/templates/Container';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as React from 'react';

const HeroHome = dynamic(() => import('@/components/landing-home/HeroHome'));
const Section1Home = dynamic(() => import('@/components/landing-home/Section1Home'));
const Section2Home = dynamic(() => import('@/components/landing-home/Section2Home'));
const Section3Home = dynamic(() => import('@/components/landing-home/Section3Home'));
const Section4Home = dynamic(() => import('@/components/landing-home/Section4Home'));
const Section5Home = dynamic(() => import('@/components/landing-home/Section5Home'));
const Section6Home = dynamic(() => import('@/components/landing-home/Section6Home'));
const Section7Home = dynamic(() => import('@/components/landing-home/Section7Home'));

interface IAppProps {}

const App: NextPage<IAppProps> = () => {
	return (
		<Container>
			<NextHead title={'VSK'} description={'VSK'} />
			<HeroHome />
			<Section1Home />
			<Section2Home />
			<Section3Home />
			<Section4Home />
			<Section5Home />
			<Section6Home />
			<Section7Home />
		</Container>
	);
};

export default App;
