import express from 'express';
import router from './routes/routes.js'

const PORT = 3000

const app = express()

app.use(router)

console.log(`El servidor esta corriendo en el puerto ${PORT}`)

app.listen(PORT)