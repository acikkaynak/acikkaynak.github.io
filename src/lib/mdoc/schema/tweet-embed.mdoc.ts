import { component } from "@astrojs/markdoc/config";

// ** @type {import('@markdoc/markdoc').Schema} */
export const tweetEmbed = {
	render: component("./src/layouts/components/mdoc/tweet-embed.astro"),
	attributes: {
		url: {
			type: String,
			required: true,
		},
	},
};
