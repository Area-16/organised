import Sequelize from 'sequelize'

const Connect = (() => {
  return new Sequelize(process.env.DB, process.env.DBUSER, process.env.PASS, {
    dialect: 'mssql',
    host: process.env.DBHOST,
    port: '1433',
    logging: false
  })
})()

export { Connect }
