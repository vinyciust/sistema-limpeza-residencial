import { DataTypes } from 'sequelize';
import banco from '../Banco.js';

const TipoLimpeza = banco.define('TipoLimpeza', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valorHora: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

export default TipoLimpeza;