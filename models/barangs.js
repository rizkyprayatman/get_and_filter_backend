'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barangs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        as: 'category',
        foreignKey: 'type',
      })
    }
  }
  Barangs.init({
    type: DataTypes.INTEGER,
    name: DataTypes.STRING,
    status: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    attachment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barangs',
    tableName: 'barangs',
  });
  return Barangs;
};