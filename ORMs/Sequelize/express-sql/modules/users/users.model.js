"use strict";

const { genSaltSync, hashSync } = require("bcryptjs");
const { Model } = require("sequelize");

module.exports =  (sequelize, DataTypes) => {
	class User extends Model {
		toJSON() {
			const attributes = this.get();

			delete attributes.password;

			return attributes;
		}

		static associate(models) {
			//User.hasMany(models.ApiKey);
		}
	}

	User.init(
		{
			id: {
				allowNull: true,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			username: {
				type: DataTypes.STRING,
				field: "username",
				unique: true,
				allowNull: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: true,
				set(value) {
					this.setDataValue("password", hashSync(value, genSaltSync(12)));
				},
			},
			role: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			profile: {
				type: DataTypes.JSONB,
				allowNull: true,
				defaultValue: {},
			},
			createdAt: {
				type: DataTypes.DATE,
				field: "created_at",
				allowNull: true,
			},
			updatedAt: {
				type: DataTypes.DATE,
				field: "updated_at",
				allowNull: true,
			},
			deletedAt: {
				type: DataTypes.DATE,
				field: "deleted_at",
				allowNull: true,
			},
		},
		{
			sequelize,
			paranoid: true,
			modelName: "User",
		},
	);
	return User;
};
