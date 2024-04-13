const env = require("../../common/env");

module.exports=  {
	development: {
		username: env("DB_USER"),
		password: env("DB_PASS"),
		database: env("DB_NAME"),
		host: env("DB_HOST"),
		dialect: env("DB_DIALECT"),
		logging: true,
		//logQueryParameters: true,
		//benchmark: true,
	},
	test: {
		username: env("DB_USER"),
		password: env("DB_PASS"),
		database: env("DB_NAME"),
		host: env("DB_HOST"),
		dialect: env("DB_DIALECT"),
		logging: false,
	},
	production: {
		username: env("DB_USER"),
		password: env("DB_PASS"),
		database: env("DB_NAME"),
		host: env("DB_HOST"),
		dialect: env("DB_DIALECT"),
		logging: false,
	},
	timestamps: true,
} ;
