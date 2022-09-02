import { createUser, createUserBody, deleteUser } from './users.js'

const apiDoc = {
  openapi: "3.0.1",
  info: {
    version: "1.1.0",
    title: "to do API - Documentation",
    description: "Description of my API here",
    // termsOfService: 'https://mysite.com/terms',//תנאי השירות
    contact: {
      // name: "Developer name",
      // email: "dev@example.com",
      // url: "https://devwebsite.com",
    },
    // license: {//רשיון
    //   name: 'Apache 2.0',
    //   url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    // },
  },
  servers: [
    {
      url: 'http://localhost:3030/',
      description: 'Local Server',
    },
    // {
    //   url: 'https://api.mysite.com',
    //   description: 'Production Server',
    // },
  ],
  tags: [
    {
      name: 'Roles',
    },
    {
      name: 'Users',
    },
  ],
  paths: {
    users: {
      post: createUser,
    },
    'users/{id}': {
      delete: deleteUser,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      createUserBody,
    },
  },
};

export default apiDoc