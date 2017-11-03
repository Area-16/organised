import { INTEGER, STRING } from 'sequelize'
import * as Db from '../database/'

const Database = Db.default()
const usuarios = Database.define('users', {
  id: {
    type: INTEGER,
    primaryKey: true
  },
  usuario: {
    type: STRING({ length: 30 })
  }
}, {
  timestamps: true,
  freezeTableName: true
})

export { usuarios }
