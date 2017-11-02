import Sequelize from 'sequelize'

export default function Connect () {
  return new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
    dialect: 'mssql',
    host: process.env.DBHOST,
    logging: false
  })
}
