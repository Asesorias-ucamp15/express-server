import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('Hola Mundo')
})

router.get('/lorem', (req, res) => {
    res.send(`<h1>Hola soy un lorem ipsum</h1>`)
})

router.delete('/', (req, res) => {
    res.send('Hola Mundo estp es un delete')
})

router.put('/', (req, res) => {
    res.send('Hola Mundo este es un put')
})

export default router