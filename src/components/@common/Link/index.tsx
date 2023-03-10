import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';

interface INextLinkProps {
	href: string;
	children?: React.ReactNode;
	className?: string;
	onClick?(): void;
}

const NextLink: React.FC<INextLinkProps> = props => (
	<Link href={props.href}>
		<a onClick={props.onClick} className={classNames(props.className)}>
			{props.children}
		</a>
	</Link>
);

export default NextLink;
