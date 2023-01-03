import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGPointerProps extends ISVGBaseInterface {}

const ISVGPointer: React.FunctionComponent<IISVGPointerProps> = props => {
	const {} = props;
	return (
		<SVG viewBox="0 16 66.55 40" {...props}>
			<polygon
				className="cls-2"
				points="13.81 31.09 52.67 17.98 33.46 54.29 30.98 36.14 13.81 31.09"
			/>
			<circle className="cls-1" cx="17.92" cy="48.15" r="4.12" />
		</SVG>
	);
};

export default ISVGPointer;

const SVG = styled.svg<IISVGPointerProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-miterlimit: 10;
	}
`;
