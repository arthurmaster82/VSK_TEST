import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGPhoneConfigDollarProps extends ISVGBaseInterface {}

const ISVGPhoneConfigDollar: React.FunctionComponent<IISVGPhoneConfigDollarProps> = props => {
	const {} = props;
	return (
		<SVG viewBox="0 6 66.55 54" {...props}>
			<g>
				<path
					className="cls-3"
					d="M32.31,38.05c.64-.21,1.07-.8,1.07-1.49s-.43-1.28-1.07-1.49v2.98Z"
				/>
				<path
					className="cls-3"
					d="M43.5,36.45v-4.05l-3.04-.64c-.21-.53-.43-1.07-.69-1.6l1.71-2.61-2.88-2.88-2.56,1.76c-.53-.27-1.07-.48-1.6-.69l-.64-3.04h-4.05l-.64,3.04c-.53,.21-1.07,.43-1.6,.69l-2.61-1.71-2.88,2.88,1.76,2.56c-.27,.53-.48,1.07-.69,1.6l-3.04,.64v4.05l3.04,.59c.16,.59,.37,1.12,.69,1.6l-1.71,2.61,2.88,2.88,2.56-1.71c.53,.27,1.07,.48,1.6,.69l.59,3.04h4.05l.59-3.04c.59-.16,1.12-.37,1.6-.69l2.61,1.71,2.88-2.88-1.65-2.56c.27-.53,.48-1.07,.69-1.6l3.04-.64Zm-9.06-3.62h-1.07v-.53c0-.69-.43-1.28-1.07-1.49v3.14c1.23,.27,2.13,1.33,2.13,2.61s-.91,2.34-2.13,2.61v1.12h-1.07v-1.12c-1.23-.27-2.13-1.33-2.13-2.61v-.53h1.07v.53c0,.69,.43,1.28,1.07,1.49v-3.14c-1.23-.27-2.13-1.33-2.13-2.61s.91-2.34,2.13-2.61v-1.12h1.07v1.12c1.23,.27,2.13,1.33,2.13,2.61v.53Z"
				/>
				<path
					className="cls-3"
					d="M30.18,32.3c0,.69,.43,1.28,1.07,1.49v-2.98c-.64,.21-1.07,.8-1.07,1.49Z"
				/>
				<path
					className="cls-3"
					d="M47.23,34.43c0-7.89-6.02-14.55-13.8-15.35-.32-.05-.59,.16-.59,.48,0,.27,.21,.53,.48,.59,7.25,.75,12.84,6.93,12.84,14.28,0,6.18-4,11.67-9.81,13.64l-.32-1.55-3.2,2.77,4,1.39-.32-1.6c6.34-2.03,10.71-7.99,10.71-14.65h0Z"
				/>
				<path
					className="cls-3"
					d="M17.39,34.43c0-6.18,4-11.67,9.81-13.64l.32,1.55,3.2-2.77-4-1.39,.32,1.6c-6.34,2.03-10.71,7.99-10.71,14.65,0,7.89,6.02,14.55,13.8,15.35,.32,.05,.59-.21,.59-.48s-.21-.53-.48-.59c-7.25-.75-12.84-6.93-12.84-14.28h0Z"
				/>
			</g>
			<g>
				<path
					className="cls-3"
					d="M25.05,8.66v2.43c0,.93,.75,1.68,1.68,1.68h10.11c.93,0,1.68-.75,1.68-1.68v-2.43"
				/>
				<g>
					<path
						className="cls-1"
						d="M17.82,43.69v10.82c0,1.89,1.53,3.42,3.42,3.42h21.08c1.89,0,3.42-1.53,3.42-3.42v-10.93"
					/>
					<path
						className="cls-1"
						d="M45.74,23.82V12.08c0-1.89-1.53-3.42-3.42-3.42H21.24c-1.89,0-3.42,1.53-3.42,3.42v11.64"
					/>
					<line
						className="cls-2"
						x1="28.3"
						y1="55.57"
						x2="33.6"
						y2="55.57"
					/>
				</g>
			</g>
		</SVG>
	);
};

export default ISVGPhoneConfigDollar;

const SVG = styled.svg<IISVGPhoneConfigDollarProps>`
	.cls-1 {
		stroke-width: 0.84px;
	}

	.cls-1,
	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-miterlimit: 10;
	}

	.cls-3 {
		fill: ${props => props.strokeColor || colors.info};
	}
`;
