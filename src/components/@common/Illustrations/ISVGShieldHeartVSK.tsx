import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGShieldHeartVSKProps extends ISVGBaseInterface {}

const ISVGShieldHeartVSK: React.FunctionComponent<IISVGShieldHeartVSKProps> = props => {
	return (
		<SVG viewBox="0 14 66.55 41" {...props}>
			<path
				className="cls-2"
				d="M29.13,48.45c2.24,1.84,3.69,2.61,3.7,2.6,.02,.02,4.92-2.52,10.62-9.66,5.34-6.68,3.96-22.93,3.96-22.93-9.23,1.96-13.91-2.25-14.55-2.87,0,0-.01-.06-.04-.04-.02-.02-.04,.04-.04,.04-.63,.62-5.32,4.83-14.55,2.87,0,0-.8,9.16,1.07,16.55"
			/>
			<path
				className="cls-1"
				d="M26.77,41.64l-4.55-4.55-.21,.21c-2.33,2.33-2.39,6.08-.18,8.49l-3.75,3.75-3.75-3.75c2.2-2.41,2.15-6.16-.18-8.49l-.21-.21-4.55,4.55,4.15,4.15-4.15,4.15,4.55,4.55,4.14-4.14,4.14,4.14,4.55-4.55-4.15-4.15,4.15-4.15Zm-4.55-3.72l3.72,3.72-3.72,3.72c-1.9-2.11-1.9-5.33,0-7.43Zm-8.29,0c1.9,2.11,1.9,5.33,0,7.43l-3.72-3.72,3.72-3.72Zm0,15.74l-3.72-3.72,3.72-3.72,3.72,3.72-3.72,3.72Zm8.28,0l-3.72-3.72,3.72-3.72,3.72,3.72-3.72,3.72Z"
			/>
			<path
				className="cls-1"
				d="M39.71,25.98h0c-1.49-1.49-3.91-1.49-5.4,0l-1.93,1.93-1.93-1.93c-1.49-1.49-3.91-1.49-5.4,0h0c-1.49,1.49-1.49,3.91,0,5.4l1.93,1.93h0s5.4,5.4,5.4,5.4h0s0,0,0,0l5.4-5.4h0s1.93-1.93,1.93-1.93c1.49-1.49,1.49-3.91,0-5.4Z"
			/>
		</SVG>
	);
};

export default ISVGShieldHeartVSK;

const SVG = styled.svg<IISVGShieldHeartVSKProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-miterlimit: 10;
	}
`;
