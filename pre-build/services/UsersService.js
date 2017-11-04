import { Arguments } from 'organiser'
import { usuarios } from '../models/User'

@Arguments(usuarios)
export class UserService {
  constructor(db) {
    this.db = db
  }

  createUser(userPayload) {
    return new Promise((resolve, reject) => {
      this.db.create(userPayload).then((response) =>{
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  deleteById(id) {
    return new Promise((resolve, reject) => {
      this.db
        .destroy({ id: id })
        .then((response) => {
          resolve('User deleted!')
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
