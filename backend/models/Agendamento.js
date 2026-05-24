import { DataTypes } from 'sequelize';
import banco from '../Banco.js';
import TipoLimpeza from './TipoLimpeza.js';

const Agendamento = banco.define('Agendamento', {
  nomeCliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  dataFim: {
    type: DataTypes.DATE,
    allowNull: false
  },
  tempoTotal: {
    type: DataTypes.FLOAT
  },
  valorFinal: {
    type: DataTypes.FLOAT
  }
});

TipoLimpeza.hasMany(Agendamento);
Agendamento.belongsTo(TipoLimpeza);

export default Agendamento;