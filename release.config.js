const DOCKER_IMAGE_NAME = 'nitzano/dbzar';

module.exports = {
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		'@semantic-release/github',
		[
			'@semantic-release/exec',
			{
				publishCmd: `docker build -t ${DOCKER_IMAGE_NAME} .`,
			},
		],
		['semantic-release-docker', {name: DOCKER_IMAGE_NAME}],
	],
};
