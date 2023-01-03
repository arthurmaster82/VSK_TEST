import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGPlanificationsProps extends ISVGBaseInterface {}

const ISVGPlanifications: React.FunctionComponent<IISVGPlanificationsProps> = props => {
	const {} = props;
	return (
		<SVG viewBox="0 16 66.55 35" {...props}>
			<g>
				<path
					className="cls-1"
					d="M45.52,17.73c1.57,1.57,1.57,4.12,0,5.69l-5.69-5.69c1.57-1.57,4.12-1.57,5.69,0Z"
				/>
				<rect
					className="cls-1"
					x="18.32"
					y="29.56"
					width="27.42"
					height="3.42"
					transform="translate(-12.73 31.82) rotate(-45.01)"
				/>
				<polygon
					className="cls-1"
					points="21.59 44.14 18.95 44.39 19.17 41.72 21.59 44.14"
				/>
			</g>
			<g>
				<polyline
					className="cls-2"
					points="32.59 36.35 33.27 37.01 35.02 38.77 36.78 40.54 38.54 42.29 39.94 43.69 45.62 38 38.28 30.66"
				/>
				<polyline
					className="cls-2"
					points="32.59 24.97 25.26 17.63 19.57 23.32 20.96 24.72 22.73 26.47 24.48 28.23 26.24 29.99 26.91 30.66"
				/>
				<line
					className="cls-2"
					x1="40.34"
					y1="40.49"
					x2="38.54"
					y2="42.29"
				/>
				<line
					className="cls-2"
					x1="38.59"
					y1="38.73"
					x2="36.78"
					y2="40.54"
				/>
				<line
					className="cls-2"
					x1="36.83"
					y1="36.98"
					x2="35.02"
					y2="38.77"
				/>
				<line
					className="cls-2"
					x1="35.07"
					y1="35.22"
					x2="33.27"
					y2="37.01"
				/>
				<line
					className="cls-2"
					x1="28.04"
					y1="28.18"
					x2="26.24"
					y2="29.99"
				/>
				<line
					className="cls-2"
					x1="26.28"
					y1="26.43"
					x2="24.48"
					y2="28.23"
				/>
				<line
					className="cls-2"
					x1="24.52"
					y1="24.67"
					x2="22.73"
					y2="26.47"
				/>
				<line
					className="cls-2"
					x1="22.76"
					y1="22.91"
					x2="20.96"
					y2="24.72"
				/>
				<polygon
					className="cls-2"
					points="19.47 38.1 21.13 39.76 23.55 42.18 25.16 43.79 32.59 36.35 38.28 30.66 44.55 24.4 45.52 23.42 39.83 17.73 38.86 18.71 32.59 24.97 26.91 30.66 19.47 38.1"
				/>
				<path
					className="cls-2"
					d="M45.52,23.42c1.57-1.57,1.57-4.12,0-5.69s-4.12-1.57-5.69,0"
				/>
				<polyline
					className="cls-2"
					points="19.47 38.1 18.95 44.39 25.13 43.86"
				/>
				<polyline
					className="cls-2"
					points="38.86 18.71 40.52 20.37 42.93 22.78 44.54 24.39"
				/>
				<line
					className="cls-2"
					x1="40.52"
					y1="20.37"
					x2="21.13"
					y2="39.76"
				/>
				<line
					className="cls-2"
					x1="42.93"
					y1="22.78"
					x2="23.55"
					y2="42.18"
				/>
			</g>
		</SVG>
	);
};

export default ISVGPlanifications;

const SVG = styled.svg<IISVGPlanificationsProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-miterlimit: 10;
		stroke-width: 0.43px;
	}
`;
