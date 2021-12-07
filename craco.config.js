module.exports = {
	style: {
		sass: {
			loaderOptions: {
				additionalData: `@import "./src/scssStyles/abstracts/_variables.scss";
          @import "./src/scssStyles/base/_typography.scss";`,
			},
		},
	},
};
