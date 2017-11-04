import { GET, Response, MediaType } from 'organiser'

export class Hello {
    @GET
    async world() {
      return Response.ok(
        { message: 'Hello, world!' },
        MediaType.APPLICATION_JSON
      ).build()
    }
  }