const fs = require('fs')
const path=require('path')
const chalk=require('chalk')
const Sequelize=require('sequelize')
const env=require('../common/env')
const databaseConfig = require('../sequelize/config/database')

const config = databaseConfig[env('NODE_ENV')];
const runTimeEnv = process.env.NODE_ENV || "development",

db = {};

var sequelize;


sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config,
);

console.log(
  chalk.bold.cyan(`
        ----------------------------
            POSTGRES CONNECTED
        ----------------------------`)
)

if (env('NODE_ENV') === 'production') {
  const context = require
		.context("/modules/", true, /model.js$/, "sync")
		.keys()
		.map(context)
		.forEach((module) => {
			const sequelizeModel = module.default(sequelize, Sequelize);

			db[sequelizeModel.name] = sequelizeModel;
		});
} else {
  fs.readdirSync(path.join(process.cwd(), '/modules/')).forEach((module) => {
    if (module !== 'index.js' && module !== 'models.js') {
      fs.readdirSync(path.join(process.cwd(), '/modules/', module)).forEach(
        (file) => {
          if (file.includes('model.js')) {
						try{
            const sequelizeModel = require(path.join(
              process.cwd(),
              '/modules/',
              module,
              file
            ))(sequelize, Sequelize.DataTypes)
						db[sequelizeModel.name] = sequelizeModel;
						}
						catch(error){
						 console.log(error);
						}
          }
        }
      )
    }
  })
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
