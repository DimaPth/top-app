import React from "react";
import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">text</Htag>
			<Button appearance="primary" arrow="right">
				Push me
			</Button>
			<Button appearance="ghost" arrow="down">
				Push me
			</Button>
			<P size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dignissimos.</P>
			<Tag size="s" color="green" href="www.google.com">
				Lorem, ipsum.
			</Tag>
			<Tag color="red">Lorem, ipsum dolor.</Tag>
			<Tag color="grey">Lorem, ipsum dolor.</Tag>
			<Tag color="primary">Lorem, ipsum dolor.</Tag>
			<Tag color="ghost">Lorem, ipsum dolor.</Tag>
		</>
	);
}
