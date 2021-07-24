import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

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
			<Rating rating={rating} isEditable setRating={setRating} />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
		firstCategory,
	});
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
