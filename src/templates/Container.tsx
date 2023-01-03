import * as React from 'react';

interface IContainerProps {
	children?: React.ReactNode;
}

const Container: React.FC<IContainerProps> = props => (
	<div className="flex-grow">{props.children}</div>
);

export default Container;
