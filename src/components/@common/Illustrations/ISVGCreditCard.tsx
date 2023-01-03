import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGCreditCardProps extends ISVGBaseInterface {}

const ISVGCreditCard: React.FunctionComponent<IISVGCreditCardProps> = props => {
	return (
		<SVG viewBox="0 16 55 33" {...props}>
			<path
				className="cls-1"
				d="M49.52,24.55l-2.37-.3v-4.46c0-1.36-1.11-2.47-2.47-2.47H16.61c-1.36,0-2.46,1.11-2.46,2.47v19.55c0,1.36,1.1,2.47,2.46,2.47h.09l-.07,.52c-.16,1.24,.72,2.38,1.96,2.54l27.84,3.59c1.24,.16,2.38-.72,2.54-1.96l2.5-19.39c.16-1.24-.72-2.38-1.96-2.54Zm-2.76,1.69H14.54v-4.61H46.76v4.61Zm-30.15-8.53h28.07c1.15,0,2.08,.93,2.08,2.08v1.45H14.54v-1.45c0-1.15,.93-2.08,2.07-2.08Zm-2.07,21.63v-12.71H46.76v12.71c0,1.15-.93,2.08-2.08,2.08H16.61c-1.14,0-2.07-.93-2.07-2.08Z"
			/>
			<path
				className="cls-1"
				d="M44.14,32.83h-8.37v4.95h8.37v-4.95Zm-.39,4.56h-7.6v-4.18h7.6v4.18Z"
			/>
			<rect className="cls-1" x="17.07" y="29.37" width="5.65" height=".39" />
			<rect className="cls-1" x="24.53" y="29.37" width="5.65" height=".39" />
			<rect className="cls-1" x="17.07" y="32.18" width="8.77" height=".39" />
			<rect className="cls-1" x="27.36" y="32.18" width="2.83" height=".39" />
		</SVG>
	);
};

export default ISVGCreditCard;

const SVG = styled.svg<ISVGBaseInterface>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}
`;
