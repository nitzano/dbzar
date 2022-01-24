module.exports = {
	rules: {
		'import/extensions': 0,
		'unicorn/prefer-module': 0,
		'unicorn/no-empty-file': 0,
		'unicorn/prefer-node-protocol': 0,
		'no-console': [1, {allow: ['debug', 'warn', 'error']}],
	},

	globals: {
		__MONGO_URI__: true,
	},
	prettier: true,
};
