'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Superhero.hasMany(models.Image, {
        foreignKey: 'heroId',
      });
      Superhero.belongsToMany(models.Superpower, {
        through: 'heroes_to_superpowers',
        foreignKey: 'heroId',
      });
    }
  }
  superhero.init(
    {
      nickName: {
        field: 'nick_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      originDescription: {
        field: 'origin_description',
        type: DataTypes.STRING(512),
      },
      catchPhrase: {
        field: 'catch_phrase',
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Superhero',
      tableName: 'superheroes',
      underscored: true,
    }
  );
  return Superhero;
};
