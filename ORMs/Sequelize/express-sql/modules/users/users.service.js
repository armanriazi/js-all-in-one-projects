const ServiceBase = require('../../services/serviceBase')
const models = require('../models')

/**
 * Class representing organizations user
 * @class
 */
module.exports= new (class User extends ServiceBase {
  /**
   * find all apikeys for one user
   * @type {function}
   * @param {object}
   * @public
   */
  async findUserApiKey(clause) {
    return await this.model.findAll({
      where: clause,
      attributes: {
        exclude: ['password'],
      }
    })
  }



  /**
   * find one user and its role
   * @type {function}
   * @param {object}
   * @public
   */
  async findUserRole(id) {
    return await this.model.findAll({
      where: {
        id,
      },
    })
  }
})(models.User)
