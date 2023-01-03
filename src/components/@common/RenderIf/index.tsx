import * as React from 'react';

interface IRenderIfProps {
	isTrue?: any;
	children?: React.ReactNode;
}

export const RenderIf: React.FC<IRenderIfProps> = ({ children, isTrue }) => {
	if (!isTrue) return null;
	return <React.Fragment>{children}</React.Fragment>;
};
