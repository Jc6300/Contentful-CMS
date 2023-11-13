import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
	space: "ownwh3wjo1cc",
	environment: "master",
	accessToken: "c04GMUGaH2hEbGkN6NOQV4KBM4Vjodh_YGW1kYKWosA",
});

export const useFetchProjects = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);
	const getData = async () => {
		try {
			const response = await client.getEntries({ content_type: "projects" });
			const projects = response.items.map((item) => {
				const { title, url, image } = item.fields;
				const id = item.sys.id;
				const img = image?.fields?.file?.url;
				return { title, url, id, img };
			});
			setProjects(projects);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return { loading, projects };
};
