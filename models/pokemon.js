'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pokedex extends Model {
    static associate(models) {
      // Defina associações aqui, se necessário
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
      validate: {
        isIn: {
          args: [['Normal', 'Fogo', 'Água', 'Elétrico', 'Grama', 'Gelo', 'Lutador', 'Venenoso', 'Terrestre', 'Voador', 'Psíquico', 'Inseto', 'Pedra', 'Fantasma', 'Dragão', 'Sombrio', 'Aço', 'Fada']],
          msg: "Tipo inválido. Escolha um dos tipos permitidos."
        }
      }
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nivelDePoder: {
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
