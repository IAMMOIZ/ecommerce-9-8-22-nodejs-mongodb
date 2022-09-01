const { schema } = require("./model/address-model")

paths:
  /ping:
    get:
      responses:
        '200':
          description: OK
          content:
            text/plain:
              schema:
                type: string
                example: pong




                Response Media Types
                paths:
                /users:
                  get:
                    summary: Get all users
                    responses:
                      '200':
                        description: A list of users
                        content:
                          application/json:
                            schema:
                              $ref: '#/components/schemas/ArrayOfUsers'
                          application/xml:
                            schema:
                              $ref: '#/components/schemas/ArrayOfUsers'
                          text/plain:
                            schema:
                              type: string


                # This operation returns image
                /logo:
                  get:
                    summary: Get the logo image
                    responses:
                      '200':
                        description: Logo image in PNG format
                        content:
                          image/png:
                            schema:
                              type: string
                              format: binary


HTTP Status Codes

responses:
'200':
  description: OK
'400':
  description: Bad request. User ID must be an integer and larger than 0.
'401':
  description: Authorization information is missing or invalid.
'404':
  description: A user with the specified ID was not found.
'5XX':
  description: Unexpected error.





  response body

  responses:
  '200':
    description: A User object
    content:
      application/json:
        schema:
          type: object //object hoga ya array hoga
          properties:
            id:
              type: integer
              description: The user ID.
            username:
              type: string
              description: The user name.


              
conecting throw schema
              responses:
              '200':
                description: A User object
                content:
                  application/json:
                    schema:
                      $ref: '#/components/schemas/User'
      components:
        schemas:
          User:
            type: object
            properties:
              id:
                type: integer
                description: The user ID.
              username:
                type: string
                description: The user name.