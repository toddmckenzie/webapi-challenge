const express = require('express');

const router = express.Router();

const projectDb = require('../helpers/projectModel.js'); //question if this is right/
const actionDb = require('../helpers/actionModel.js');//question if this is right?



router.get('/:id', (req, res) => {
    console.log(req.params.id)
    console.log(actionDb.get(req.params.id))
    actionDb
    .get(req.params.id)
    .then(res => {
        res.status(200).json(res)
    })
    .catch(error => {
        res.status(500).json({message: "internal server errors"})
    })
})


router.post('/', (req, res) => {
    const project = { name: req.body.name, description: req.body.description};
    actionDb
    .insert(project)
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({message: "internal server errors"})
    })
})


router.put('/', (req,res) => {

    actionDb
    .update(req.params.id, req.body)
    .then(res => {
        res.status(200).json(res)
    })
    .catch(error => {
        res.status(500).json({messge: "internal server errors"})
    } )
})

router.delete('/:id', (req,res) => {
    
    actionDb
    .remove(req.params.id)
    .then(res => {
        res.status(200).json({messge: "internal server errors"})
    })
})


module.exports = router;