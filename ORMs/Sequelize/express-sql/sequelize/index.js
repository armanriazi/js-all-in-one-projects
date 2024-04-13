const Sequelize = require('sequelize');
const config  = require('./config/database');
const env  = require('../common/env');
const { applyExtraSetup } = require("./extra-setup");


const  runTimeEnv= process.env.NODE_ENV || "development",
envConfig = config[runTimeEnv];

	sequelize = new Sequelize(
		config[runTimeEnv].database,
		config[runTimeEnv].username,
		config[runTimeEnv].password,
		config[runTimeEnv]
	);


const modelDefiners = [
	require('./models/user.model'),
	require('./models/instrument.model'),
	require('./models/orchestra.model'),
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
