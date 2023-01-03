import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGArrowLeftRightProps extends ISVGBaseInterface {
	strokeColorArrowOutline?: string | number;
}

const ISVGArrowLeftRight: React.FunctionComponent<IISVGArrowLeftRightProps> = props => {
	const {} = props;
	return (
		<SVG viewBox="0 16 66.55 35" {...props}>
			<path
				className="cls-1"
				d="M35.28,32.97l8.06,8.06c.11,.11,.17,.27,.16,.42,0,.15-.04,.3-.16,.42l-8.06,8.06c-.21,.21-.56,.21-.78,0l-2.22-2.22c-.21-.21-.21-.56,0-.78l3.36-3.36H17.15c-.3,0-.55-.25-.55-.55v-3.14c0-.3,.25-.55,.55-.55h18.49s-3.36-3.36-3.36-3.36c-.21-.21-.21-.56,0-.78l2.22-2.22c.21-.21,.56-.21,.78,0h0Z"
			/>
			<path
				className="cls-2"
				d="M30.37,34l-8.06-8.06c-.11-.11-.17-.27-.16-.42,0-.15,.04-.3,.16-.42l8.06-8.06c.21-.21,.56-.21,.78,0l2.22,2.22c.21,.21,.21,.56,0,.78l-3.36,3.36h18.49c.3,0,.55,.25,.55,.55v3.14c0,.3-.25,.55-.55,.55H30l3.36,3.36c.21,.21,.21,.56,0,.78l-2.22,2.22c-.21,.21-.56,.21-.78,0h0Z"
			/>
		</SVG>
	);
};

export default ISVGArrowLeftRight;

const SVG = styled.svg<IISVGArrowLeftRightProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColorArrowOutline || '#000'};

		stroke-miterlimit: 10;
		stroke-width: 0.43px;
	}
`;
