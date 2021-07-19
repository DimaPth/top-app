import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import cn from "classnames";
import styles from "./P.module.css";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import { Footer } from "./footer/Footer";

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
