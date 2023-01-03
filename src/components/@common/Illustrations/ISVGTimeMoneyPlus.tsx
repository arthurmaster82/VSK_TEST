import { colors } from '@/utils/colors';
import * as React from 'react';
import styled from 'styled-components';
import { ISVGBaseInterface } from './IBaseSVGInterface';

interface IISVGTimeMoneyPlusProps extends ISVGBaseInterface {}

const ISVGTimeMoneyPlus: React.FunctionComponent<IISVGTimeMoneyPlusProps> = props => {
	return (
		<SVG viewBox="0 0 65.65 66.96" {...props}>
			<circle className="cls-2" cx="33.55" cy="36.78" r="13.61" />
			<polyline className="cls-2" points="44.57 37.42 33.55 37.42 33.55 27.7" />
			<path
				className="cls-1"
				d="M50.82,18.03h-2.45v-2.45c0-1.01-.78-1.82-1.74-1.82s-1.74,.82-1.74,1.82v2.45h-2.45c-1.01,0-1.82,.78-1.82,1.74s.82,1.74,1.82,1.74h2.45v2.45c0,1.01,.78,1.82,1.74,1.82s1.74-.82,1.74-1.82v-2.45h2.45c1.01,0,1.82-.78,1.82-1.74s-.82-1.74-1.82-1.74Z"
			/>
			<g>
				<path
					className="cls-1"
					d="M16.39,21.12c0,.19,.02,.37,.06,.52,.04,.16,.11,.3,.22,.42,.11,.12,.26,.23,.44,.32s.43,.17,.71,.22v-2.84c-.54,.06-.91,.23-1.12,.49-.21,.26-.32,.55-.32,.87Z"
				/>
				<path
					className="cls-1"
					d="M19.83,24.33c-.1-.13-.24-.25-.41-.34-.18-.1-.4-.17-.68-.22h-.11s0,2.96,0,2.96c.51-.06,.88-.22,1.12-.5s.35-.62,.35-1.03c0-.15-.02-.3-.05-.46-.04-.15-.1-.29-.2-.43Z"
				/>
				<path
					className="cls-1"
					d="M18.38,14.73c-4.86,0-8.8,3.94-8.8,8.8s3.94,8.8,8.8,8.8,8.8-3.94,8.8-8.8-3.94-8.8-8.8-8.8Zm2.62,11.36c-.1,.28-.26,.52-.47,.74-.21,.22-.48,.39-.79,.53-.32,.14-.69,.22-1.11,.25v1.13h-.79v-1.14c-.83-.06-1.47-.3-1.91-.72s-.7-1-.76-1.74h1.02c.1,.96,.66,1.49,1.66,1.6v-3.11l-.12-.02c-.38-.06-.71-.15-1-.27-.29-.12-.53-.27-.73-.46-.2-.19-.35-.42-.46-.7-.1-.28-.16-.61-.16-1,0-.31,.06-.6,.17-.86,.12-.26,.28-.49,.49-.68,.21-.2,.47-.35,.77-.47,.3-.12,.64-.2,1.02-.24v-1.01h.79v1c.44,.04,.81,.13,1.11,.28s.54,.32,.73,.52,.33,.43,.43,.67c.1,.24,.16,.48,.2,.71l-.98,.18c-.05-.2-.11-.38-.19-.55s-.17-.32-.28-.44c-.11-.13-.25-.23-.42-.32s-.37-.14-.6-.17v2.99l.17,.02c.78,.12,1.36,.37,1.76,.74,.4,.38,.6,.94,.6,1.69,0,.3-.05,.59-.16,.87Z"
				/>
			</g>
		</SVG>
	);
};

export default ISVGTimeMoneyPlus;

const SVG = styled.svg<IISVGTimeMoneyPlusProps>`
	.cls-1 {
		fill: ${props => props.strokeColor || colors.info};
	}

	.cls-2 {
		fill: none;
		stroke: ${props => props.strokeColor || colors.info};
		stroke-miterlimit: 10;
		stroke-width: 0.5px;
	}
`;
