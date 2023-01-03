import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGShieldUserVSKProps extends ISVGBaseInterface {}

const ISVGShieldUserVSK: React.FunctionComponent<IISVGShieldUserVSKProps> = props => {
	return (
		<SVG viewBox="0 14 66.55 41" {...props}>
			<g>
				<path
					className="cls-1"
					d="M31.86,31.5c-.27-.06-.53-.15-.78-.26-1.75,.7-2.9,2.39-2.9,4.3v.91h9.3v-.91c0-1.91-1.15-3.6-2.9-4.3-.86,.38-1.81,.47-2.71,.26h0Z"
				/>
				<path
					className="cls-1"
					d="M35.41,27.33c0,1.42-1.15,2.58-2.58,2.58s-2.58-1.15-2.58-2.58,1.15-2.58,2.58-2.58,2.58,1.15,2.58,2.58"
				/>
			</g>
			<path
				className="cls-2"
				d="M29.13,48.45c2.24,1.84,3.69,2.61,3.7,2.6,.02,.02,4.92-2.52,10.62-9.66,5.34-6.68,3.96-22.93,3.96-22.93-9.23,1.96-13.91-2.25-14.55-2.87,0,0-.01-.06-.04-.04-.02-.02-.04,.04-.04,.04-.63,.62-5.32,4.83-14.55,2.87,0,0-.8,9.16,1.07,16.55"
			/>
			<path
				className="cls-1"
				d="M26.77,41.64l-4.55-4.55-.21,.21c-2.33,2.33-2.39,6.08-.18,8.49l-3.75,3.75-3.75-3.75c2.2-2.41,2.15-6.16-.18-8.49l-.21-.21-4.55,4.55,4.15,4.15-4.15,4.15,4.55,4.55,4.14-4.14,4.14,4.14,4.55-4.55-4.15-4.15,4.15-4.15Zm-4.55-3.72l3.72,3.72-3.72,3.72c-1.9-2.11-1.9-5.33,0-7.43Zm-8.29,0c1.9,2.11,1.9,5.33,0,7.43l-3.72-3.72,3.72-3.72Zm0,15.74l-3.72-3.72,3.72-3.72,3.72,3.72-3.72,3.72Zm8.28,0l-3.72-3.72,3.72-3.72,3.72,3.72-3.72,3.72Z"
			/>
		</SVG>
	);
};

export default ISVGShieldUserVSK;

const SVG = styled.svg<IISVGShieldUserVSKProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-miterlimit: 10;
	}
`;
