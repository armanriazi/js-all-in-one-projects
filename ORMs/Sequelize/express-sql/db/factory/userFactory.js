"use strict";
const { randomUUID } = require("crypto");
const  { faker } = require("@faker-js/faker");
const usersService = require("../../modules/users/users.service");

// async function reset() {
// 	console.log("Will rewrite the SQL example database, adding some dummy data.");

// 	await sequelize.sync({ force: true });

// 	await sequelize.models.User.bulkCreate([
// 		{
// 			username: "jack-sparrow",
// 			id: randomUUID(),
// 			password: "$2a$12$kvR8XOiI7b6Vxi96PJz4.O0VAbPJxNAFA066X2UfEVGUa2M5h/YEG",
// 			role: "admin",
// 			profile: JSON.parse(faker.datatype.json()),
// 			created_at: new Date().toISOString(),
// 			updated_at: new Date().toISOString(),
// 		},
// 		{
// 			username: "white-beard",
// 			id: randomUUID(),
// 			password: "$2a$12$kvR8XOiI7b6Vxi96PJz4.O0VAbPJxNAFA066X2UfEVGUa2M5c/YEG",
// 			role: "admin",
// 			profile: JSON.parse(faker.datatype.json()),
// 			created_at: new Date().toISOString(),
// 			updated_at: new Date().toISOString(),
// 		},
// 		{
// 			username: "black-beard",
// 			id: randomUUID(),
// 			password: "$2a$12$kvR8XOiI7b6Vxi96PJz4.O0VAbPJxNAFA066X2UfEVGUa2M5a/YEG",
// 			role: "admin",
// 			profile: JSON.parse(faker.datatype.json()),
// 			created_at: new Date().toISOString(),
// 			updated_at: new Date().toISOString(),
// 		},
// 		{
// 			username: "brown-beard",
// 			id: randomUUID(),
// 			password: "$2a$12$kvR8XOiI7b6Vxi96PJz4.O0VAbPJxNAFA066X2UfEVGUa2M51/YEG",
// 			role: "admin",
// 			profile: JSON.parse(faker.datatype.json()),
// 			created_at: new Date().toISOString(),
// 			updated_at: new Date().toISOString(),
// 		},
// 	]);

// 	console.log("Done!");
// }

//reset();

const create = async () => {
	for (let index = 0; index < 3; index++) {
		const user = {
			id: randomUUID(),
			username: faker.internet.userName(),
			password: "$2a$12$kvR8XOiI7b6Vxi96PJz4.O0VAbPJxNAFA066X2UfEVGUa2M5h/YEG",
			role: "admin",
			profile: JSON.parse(faker.datatype.json()),
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
		};
		await usersService.create(user);
	}
	//process.exit();
};

create();



// const { randomUUID } = require('crypto')
// const  faker  = require('@faker-js/faker')
// const usersService = require('../../modules/users/users.service')

// const create = async () => {
//   for (let index = 0; index < 1000; index++) {
//     const user = {
//       id: randomUUID(),
//       username: faker.internet.userName(),
//       password: '$2a$12$kvR8XOiI7b6Vxi96PJz4.O0VAbPJxNAFA066X2UfEVGUa2M5h/YEG',
//       role: 'admin',
//       profile: JSON.parse(faker.datatype.json()),
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//     }
//     await usersService.create( user )
//   }
//   process.exit()
// }

// create()
