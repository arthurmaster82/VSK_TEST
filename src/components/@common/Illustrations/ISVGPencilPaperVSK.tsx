import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGPencilPaperVSKProps extends ISVGBaseInterface {}

const ISVGPencilPaperVSK: React.FunctionComponent<IISVGPencilPaperVSKProps> = props => {
	return (
		<SVG viewBox="0 8 65.65 54" {...props}>
			<path
				className="cls-1"
				d="M55.08,14.04l-4.55-4.55-.21,.21c-2.33,2.33-2.39,6.08-.18,8.49l-3.75,3.75-3.75-3.75c2.2-2.41,2.15-6.16-.18-8.49l-.21-.21-4.55,4.55,4.15,4.15-4.15,4.15,4.55,4.55,4.14-4.14,4.14,4.14,4.55-4.55-4.15-4.15,4.15-4.15Zm-16.55,0l3.72-3.72c1.9,2.11,1.9,5.33,0,7.43l-3.72-3.72Zm3.72,12.02l-3.72-3.72,3.72-3.72,3.72,3.72-3.72,3.72Zm8.28-15.74l3.72,3.72-3.72,3.72c-1.9-2.11-1.9-5.33,0-7.43Zm3.72,12.02l-3.72,3.72-3.72-3.72,3.72-3.72,3.72,3.72Z"
			/>
			<path
				className="cls-1"
				d="M45.89,53.19H23.75V29.32h0v-2.86c0-2.15-1.63-3.9-3.72-4.12v-5.19h18.51v-1H19.02v6.2c-2.03,.28-3.6,2-3.6,4.11v3.36h.05v23.86c-.04,.11-.04,.22,0,.33v.18h.07l3.97,6.88,3.97-6.88h23.41V24.91h-1v28.29Zm-29.42,0V30.32h2.56v22.88h-2.56Zm3.56,0V30.32h2.73v22.88h-2.73Zm.21,5.11l-1.43,.03-2.39-4.14h6.18l-2.37,4.11Z"
			/>
			<rect className="cls-1" x="24.94" y="21.09" width="5.56" height="1" />
			<rect className="cls-1" x="24.94" y="30.07" width="17.19" height="1" />
			<rect className="cls-1" x="24.94" y="32.98" width="17.19" height="1" />
			<rect className="cls-1" x="24.94" y="35.89" width="17.19" height="1" />
			<rect className="cls-1" x="37.05" y="44.83" width="4.32" height="1" />
		</SVG>
	);
};

export default ISVGPencilPaperVSK;

const SVG = styled.svg<IISVGPencilPaperVSKProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}
`;
