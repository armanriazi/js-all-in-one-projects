# Sequelize examples with Express

This repository presents examples of using [Sequelize](https://sequelize.org/) in a project with [Express](https://github.com/expressjs/express#readme).

* [Basic Sequelize + Express example](https://github.com/sequelize/express-example/tree/master/express-main-example)

* More examples will be added in the future! Stay tuned!

pnpm run db:init

pnpm run  setup

pnpm run dev

# sequelize-cli

pnpm sequelize-cli model:generate --models-path ./sequelize/models --env development --name TestUser --attributes firstName:string,lastName:string,email:string --migrations-path ./db/migrations

// --debug
// --options-path
// --url <connection string>	The database connection string to use

pnpm sequelize-cli db:migrate --config ./sequelize/config/database.js --migrations-path ./db/migrations --to 20220729150928-create-user.js

pnpm sequelize-cli db:migrate:undo:all --config ./sequelize/config/database.js --migrations-path ./db/migrations --to 20240415060456-create-test-user.js

pnpm sequelize-cli seed:generate --config ./sequelize/config/database.js --seeders-path ./db/seeders --name TestUser

pnpm sequelize-cli db:seed:all

pnpm sequelize-cli db:seed --config ./sequelize/config/database.js --seeders-path ./db/seeders --seed  20240415064934-TestUser.js


##

const env = require("../../common/env");

module.exports = {
	development: {
		username: env("DB_USER"),
		password: env("DB_PASS"),
		database: env("DB_NAME"),
		host: env("DB_HOST"),
		dialect: env("DB_DIALECT"),
		logging: true,
		logQueryParameters: true,
		benchmark: true,
		pool: {
			max: 10,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
}

## License

MIT
