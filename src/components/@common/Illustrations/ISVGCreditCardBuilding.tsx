import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGCreditCardBuildingProps extends ISVGBaseInterface {}

const ISVGCreditCardBuilding: React.FunctionComponent<IISVGCreditCardBuildingProps> = props => {
	return (
		<SVG viewBox="5 4 55 55" {...props}>
			<g>
				<path
					className="cls-1"
					d="M56.73,32.8l-2.37-.3v-4.46c0-1.36-1.11-2.47-2.47-2.47H23.82c-1.36,0-2.46,1.11-2.46,2.47v19.55c0,1.36,1.1,2.47,2.46,2.47h.09l-.07,.52c-.16,1.24,.72,2.38,1.96,2.54l27.84,3.59c1.24,.16,2.38-.72,2.54-1.96l2.5-19.39c.16-1.24-.72-2.38-1.96-2.54Zm-2.76,1.69H21.75v-4.61H53.98v4.61Zm-30.15-8.53h28.07c1.15,0,2.08,.93,2.08,2.08v1.45H21.75v-1.45c0-1.15,.93-2.08,2.07-2.08Zm-2.07,21.63v-12.71H53.98v12.71c0,1.15-.93,2.08-2.08,2.08H23.82c-1.14,0-2.07-.93-2.07-2.08Z"
				/>
				<path
					className="cls-1"
					d="M51.36,41.08h-8.37v4.95h8.37v-4.95Zm-.39,4.56h-7.6v-4.18h7.6v4.18Z"
				/>
				<rect
					className="cls-1"
					x="24.28"
					y="37.61"
					width="5.65"
					height=".39"
				/>
				<rect
					className="cls-1"
					x="31.75"
					y="37.61"
					width="5.65"
					height=".39"
				/>
				<rect
					className="cls-1"
					x="24.28"
					y="40.43"
					width="8.77"
					height=".39"
				/>
				<rect
					className="cls-1"
					x="34.57"
					y="40.43"
					width="2.83"
					height=".39"
				/>
			</g>
			<path
				className="cls-1"
				d="M21.36,28.11c0-1.37,1.11-2.47,2.47-2.47h7.21V7.79c0-.98-.79-1.77-1.77-1.77H13.45c-.98,0-1.77,.79-1.77,1.77V43.56h9.68v-15.44Zm.9-17.64h5.9v5.9h-5.9v-5.9Zm0,8.41h5.9v5.9h-5.9v-5.9Zm-1.8,14.31h-5.9v-5.9h5.9v5.9Zm0-8.41h-5.9v-5.9h5.9v5.9Zm-5.9-8.41v-5.9h5.9v5.9h-5.9Z"
			/>
		</SVG>
	);
};

export default ISVGCreditCardBuilding;

const SVG = styled.svg<IISVGCreditCardBuildingProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}
`;
