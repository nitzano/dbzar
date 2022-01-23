module.exports = {
	rules: {
		'import/extensions': 0,
		'unicorn/prefer-module': 0,
		'unicorn/no-empty-file': 0,
		'unicorn/prefer-node-protocol': 0,
	},

	globals: {
		__MONGO_URI__: true,
		__MONGO_DB_NAME__: true,
	},

};
