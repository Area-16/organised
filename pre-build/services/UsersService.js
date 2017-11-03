import { Arguments } from 'organiser'
import { usuarios } from '../models/User'

@Arguments(usuarios)
export class UserService {
  constructor(db) {
    this.db = db
  }

  deleteById(id) {
    return new Promise((resolve, reject) => {
      this.db
        .destroy({ id: id })
        .then(() => {
          resolve('User deleted!')
        })
        .catch(err => {
          reject(err.message)
        })
    })
  }
}
