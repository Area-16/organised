import {
  // GET,
  // PUT,
  // PATCH,
  // POST,
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

  // @POST
  // async addUser () {}

  @DELETE
  @Path('{id}')
  @Arguments({
    id: Types.STRING
  })
  async delete({ id }) {
    this.service
      .deleteById(id)
      .then(data => Response.ok({ error: false, message: data }))
      .catch(err => Response.badRequest({ error: true, message: err.message }))
  }
}
