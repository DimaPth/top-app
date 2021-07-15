import React from "react";
import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">text</Htag>
			<Button appearance="primary">Push me</Button>
			<Button appearance="ghost" arrow="right">
				Push me
			</Button>
		</>
	);
}