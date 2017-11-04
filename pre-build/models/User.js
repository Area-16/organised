import { INTEGER, STRING } from 'sequelize'
import * as Db from '../database/'

const Database = Db.default()
const usuarios = Database.define('users', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: STRING({ length: 150 }),
    allowNull: false
  },
  usuario: {
    type: STRING({ length: 30 }),
    allowNull: false
  },
  senha: {
    type: STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  freezeTableName: true
})

export { usuarios }
