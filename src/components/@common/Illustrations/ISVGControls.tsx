import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGControlsProps extends ISVGBaseInterface {}

const ISVGControls: React.FunctionComponent<IISVGControlsProps> = props => {
	return (
		<SVG viewBox="0 10 65.65 47" {...props}>
			<line className="cls-1" x1="16.78" y1="52.44" x2="16.78" y2="41.89" />
			<line className="cls-2" x1="16.78" y1="30.82" x2="16.78" y2="14.52" />
			<line className="cls-1" x1="32.3" y1="52.44" x2="32.3" y2="31.91" />
			<line className="cls-2" x1="32.3" y1="20.84" x2="32.3" y2="14.52" />
			<line className="cls-1" x1="47.83" y1="52.44" x2="47.83" y2="47.01" />
			<line className="cls-2" x1="47.83" y1="35.94" x2="47.83" y2="14.52" />
			<circle className="cls-3" cx="32.31" cy="26.37" r="5.53" />
			<circle className="cls-3" cx="47.83" cy="41.48" r="5.53" />
			<circle className="cls-3" cx="16.78" cy="36.36" r="5.53" />
		</SVG>
	);
};

export default ISVGControls;

const SVG = styled.svg<IISVGControlsProps>`
	.cls-1 {
		stroke-linejoin: round;
	}

	.cls-1,
	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-linecap: round;
	}

	.cls-3 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		stroke-miterlimit: 10;
	}
`;
