require("dotenv").config();

/**
 * @function env
 * @description gets environment variable's value
 * @param {string} name - environment variable key title
 * @return {string} environment variable value
 */
module.exports = (name) => {
	console.log(name);
	const value = process.env[name];

	if (value) return value;

	throw new Error(`ENV[${name}] DOES NOT EXISTS IN ENV FILE`);
};
