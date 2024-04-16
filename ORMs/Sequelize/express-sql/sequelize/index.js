const Sequelize = require('sequelize');
const config = require("./config/database")["development"];
const env  = require('../common/env');
const { applyExtraSetup } = require("./extra-setup");


const  runTimeEnv= process.env.NODE_ENV || "development",
envConfig = config[runTimeEnv];
console.log(config);
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);


const modelDefiners = [
	require('../modules/users/users.model'),
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
//applyExtraSetup(sequelize); // [TODO]

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
