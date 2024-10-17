'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pokedex extends Model {
    static associate(models) {
      // Definir associações, se necessário
    }
  }
  
  Pokedex.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true // Definindo "tipo" como chave primária
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nivelDePoder: { // Corrigido para camelCase
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Pokedex',
    tableName: 'Pokedex',
    timestamps: false
  });
  
  return Pokedex;
};
