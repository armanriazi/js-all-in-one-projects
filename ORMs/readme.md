# Sequelize examples with Express

This repository presents examples of using [Sequelize](https://sequelize.org/) in a project with [Express](https://github.com/expressjs/express#readme).

* [Basic Sequelize + Express example](https://github.com/sequelize/express-example/tree/master/express-main-example)

* More examples will be added in the future! Stay tuned!



# sequelize-cli

pnpm sequelize-cli model:generate --models-path ./sequelize/models --env development --name TestUser --attributes firstName:string,lastName:string,email:string --migrations-path ./db/migrations


pnpm sequelize-cli db:migrate --config ./sequelize/config/database.js --migrations-path ./db/migrations

pnpm sequelize-cli db:migrate:undo:all --config ./sequelize/config/database.js --migrations-path ./db/migrations --to 20240415060456-create-test-user.js

pnpm sequelize-cli seed:generate --config ./sequelize/config/database.js --seeders-path ./db/seeders --name TestUser

pnpm sequelize-cli db:seed:all

pnpm sequelize-cli db:seed --config ./sequelize/config/database.js --seeders-path ./db/seeders --seed  20240415064934-TestUser.js

sequelize-cli init:migrations
--env development
--config ./sequelize/config/database.js
--migrations-path ./db/migrations
--seeders-path ./db/seeders
--models-path ./sequelize/models
--debug

--options-path
--url <connection string>	The database connection string to use

## License

MIT
