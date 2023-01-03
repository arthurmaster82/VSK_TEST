import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGIsoTipoProps extends ISVGBaseInterface {}

const ISVGIsoTipo: React.FunctionComponent<IISVGIsoTipoProps> = props => {
	return (
		<SVG viewBox="0 0 112.442 112.607" {...props}>
			<path
				d="M-3367.408,2513.758l-29.449-29.448-1.344,1.344a39.487,39.487,0,0,0-11.641,28.1,39.458,39.458,0,0,0,10.421,26.827l-24.208,24.208-24.208-24.208a39.457,39.457,0,0,0,10.421-26.827,39.485,39.485,0,0,0-11.642-28.1l-1.344-1.344-29.448,29.448,26.855,26.855-26.855,26.855,29.448,29.448,26.772-26.772,26.773,26.772,29.449-29.448-26.855-26.855Zm-29.414-24.038,24.038,24.038-24.038,24.038a35.686,35.686,0,0,1-9.219-24.038A35.685,35.685,0,0,1-3396.822,2489.719Zm-53.615,0a35.687,35.687,0,0,1,9.219,24.038,35.688,35.688,0,0,1-9.219,24.038l-24.039-24.038Zm.034,101.822-24.073-24.073,24.073-24.073,24.073,24.073Zm53.545,0-24.073-24.073,24.073-24.073,24.073,24.073Z"
				transform="translate(3479.85 -2484.309)"
				fill="#fff"
			/>
		</SVG>
	);
};

export default ISVGIsoTipo;

const SVG = styled.svg<IISVGIsoTipoProps>`
	/* 	path {
		fill: ${props => props.strokeColor || '#f0f0f0'};
	} */
`;
