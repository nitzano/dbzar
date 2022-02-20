module.exports = {
	plugins: ['unused-imports'],
	rules: {
		'import/extensions': 0,
		'unicorn/prefer-module': 0,
		'unicorn/no-empty-file': 0,
		'unicorn/prefer-node-protocol': 0,
		'no-console': [1, {allow: ['debug', 'warn', 'error']}],
		'no-unused-vars': 'error',
		'unused-imports/no-unused-imports': 'error',
		'import/order': 1,
	},
	globals: {
		__MONGO_URI__: true,
	},
	prettier: true,
	ignores: ['website'],
};
