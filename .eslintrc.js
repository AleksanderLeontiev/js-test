module.exports = {
	env: {
		browser: true,
		es2021: true,
		"jest/globals": true,
	},
	extends: ["airbnb-base", "prettier"],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		"import/prefer-default-export": "off",
		"max-len": ["error", { ignoreComments: true, code: 100 }],
		"no-console": "off",
		"no-alert": "off",
		"no-useless-escape": "off",
		"no-unused-vars": "off",
		"no-plusplus": "off",
	},
	plugins: ["jest"],
};
