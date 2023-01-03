import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGLogoutProps extends ISVGBaseInterface {}

const ISVGLogout: React.FunctionComponent<IISVGLogoutProps> = props => {
	const {} = props;
	return (
		<SVG viewBox="0 16 66.55 35" {...props}>
			<path
				className="cls-1"
				d="M47.9,25.35l7.74,7.74c.11,.11,.16,.26,.15,.4,0,.14-.04,.29-.15,.4l-7.74,7.74c-.21,.21-.54,.21-.75,0l-2.13-2.13c-.21-.21-.21-.54,0-.75l3.23-3.23H30.48c-.29,0-.53-.24-.53-.53v-3.01c0-.29,.24-.53,.53-.53h17.77l-3.23-3.23c-.21-.21-.21-.54,0-.75l2.13-2.13c.21-.21,.54-.21,.75,0h0Z"
			/>
			<rect className="cls-2" x="14.64" y="19.66" width="28.24" height="28.24" />
		</SVG>
	);
};

export default ISVGLogout;

const SVG = styled.svg<IISVGLogoutProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-miterlimit: 10;
	}
`;
