import {
  // GET,
  // PUT,
  // PATCH,
  POST,
  DELETE,
  Path,
  Types,
  Arguments,
  Response
} from 'organiser'
import { UserService } from '../../services/UsersService'

@Arguments(UserService)
@Path('users')
export class User {
  constructor(service) {
    this.service = service
  }

  @POST
  @Arguments({
    
  })
  async addUser() {
    return this.service
      .createUser()
      .then(data => {
        data.delete(senha)
        Response.ok({
          error: false,
          data,
          message: 'Usuário criado com sucesso'
        }).build()
      })
      .catch(err => Response.ok({ error: true, message: err }).build())
  }

  @DELETE
  @Path('{id}')
  @Arguments({
    id: Types.STRING
  })
  async delete({ id }) {
    return this.service
      .deleteById(id)
      .then(data => Response.ok({ error: false, message: data }).build())
      .catch(err => Response.badRequest({ error: true, message: err }).build())
  }
}
