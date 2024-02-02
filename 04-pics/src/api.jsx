import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: "Client-ID vxPZYAzMT8XlUugdpRey17TkzEi4yOy4z0sKf7qW6cI",
		},
		params: {
			query: term,
		},
	});

	console.info(response);
	return response.data.results;
};

export default searchImages;
