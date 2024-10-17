Pokedex.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, // Faz o campo ser autoincremental
      primaryKey: true // Definindo o campo "id" como chave primária
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
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
