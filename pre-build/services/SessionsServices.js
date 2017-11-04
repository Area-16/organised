import { Arguments } from 'organiser'
import { usuarios } from '../models/User'

@Arguments(usuarios)
export class SessionsService {
  constructor(db) {
    this.db = db
  }

  StartSession (sessionPayload) {
    let { usuario, senha, email } = sessionPayload
    this.db.findOne({ usuario, senha, email })    
  }
}