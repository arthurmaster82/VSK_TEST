import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGBuildingProps extends ISVGBaseInterface {}

const ISVGBuilding: React.FunctionComponent<IISVGBuildingProps> = props => {
	return (
		<SVG viewBox="0 0 65.65 66.96" {...props}>
			<rect className="cls-2" x="35.98" y="16.65" width="20.55" height="38.26" />
			<polyline className="cls-2" points="15.43 29.61 15.43 23.28 56.54 23.28" />
			<polyline
				className="cls-2"
				points="56.54 35.93 15.43 35.93 15.43 29.61 56.54 29.61"
			/>
			<rect className="cls-2" x="15.43" y="35.93" width="20.55" height="6.33" />
			<rect className="cls-2" x="15.43" y="42.26" width="20.55" height="6.33" />
			<rect className="cls-2" x="15.43" y="48.58" width="20.55" height="6.33" />
			<polyline
				className="cls-1"
				points="40.04 54.91 40.04 42.26 52.62 42.26 52.62 54.91"
			/>
		</SVG>
	);
};

export default ISVGBuilding;

const SVG = styled.svg<IISVGBuildingProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-miterlimit: 10;
	}
`;
