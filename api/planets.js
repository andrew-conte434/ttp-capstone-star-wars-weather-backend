const router = require('express').Router()
const { Planet } = require('../db')

router.get('/', async(req, res) => {
    try {
        const planets = await Planet.findAll({
                                        order : [
                                            ['id', 'ASC']
                                        ]
                                    })
        res.status(200).send(planets)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const planet = await Planet.findByPk(req.params.id)
        res.status(200).send(planet)
    } catch(error) {
        res.status(404).send(error.message)
    }
})

router.post('/', async(req, res) => {
    try{
        const newPlanet = await Planet.create(req.body)
        res.json(newPlanet)
    } catch(error){
        res.send(error.message)
    }
})

router.put('/:id', async(req, res) => {
    try{
        const planet = await Planet.findByPk(req.params.id)
        await Planet
            .update({
                name : req.body.name || planet.name,
                description : req.body.description || planet.description,
                imageUrl : req.body.imageUrl || planet.url,
            },
            {where : {id : req.params.id}})
        res.status(200).send(`successfully updated ${planet.name}`)
    }catch(error){
        res.send(error.message)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        await Planet.destroy({where : {id : req.params.id}})
        res.status(200).send(`Deleted planet`)
    }catch(error){
        res.send(error.message)
    }
})

module.exports = router