
import swaggerUi from 'swagger-ui-express';
import apiDocumentation from './docs/api-doc.js'

import express from 'express'

const app = express()
app.use(express.json());

app.listen('3030')
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

