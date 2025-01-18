exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions;

	// Exclude your custom page from Gatsby's React runtime
	if (page.path === "/unknown-pleasures") {
		deletePage(page);
		createPage({
			...page,
			component: require.resolve("./static/unknown-pleasures/index.html"),
			context: {
				...page.context,
				noWrapper: true, // Custom flag to indicate standalone page
			},
		});
	}
};
