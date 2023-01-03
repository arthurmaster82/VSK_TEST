import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGChatProps extends ISVGBaseInterface {
	strokeColorText?: string | number;
}

const ISVGChat: React.FunctionComponent<IISVGChatProps> = props => {
	return (
		<SVG viewBox="0 16 66.55 35" {...props}>
			<path
				className="cls-2"
				d="M48.25,23.46H22.44c-1.1,0-2,.89-2,2v16.45c0,1.1,.89,2,2,2h4.92l-.75,3.87c-.15,.76,.69,1.32,1.34,.9l7.23-4.77h13.07c1.1,0,2-.89,2-2V25.45c0-1.1-.89-2-2-2Z"
			/>
			<line className="cls-1" x1="26.94" y1="29.55" x2="44.1" y2="29.55" />
			<line className="cls-1" x1="26.94" y1="33.63" x2="44.1" y2="33.63" />
			<line className="cls-1" x1="26.94" y1="37.71" x2="44.1" y2="37.71" />
			<path
				className="cls-3"
				d="M20.58,25.45c0-1.1,.89-2,2-2h21.95v-3.57c0-.96-.78-1.74-1.74-1.74H17.14c-.96,0-1.74,.78-1.74,1.74v16.45c0,.96,.78,1.74,1.74,1.74h3.44v-12.63Z"
			/>
		</SVG>
	);
};

export default ISVGChat;

const SVG = styled.svg<IISVGChatProps>`
	.cls-1 {
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.cls-1,
	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColorText || colors.info};
	}

	.cls-3 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		stroke-miterlimit: 10;
	}
`;
