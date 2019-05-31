const express = require('express');

const router = express.Router();

const projectDb = require('../helpers/projectModel.js'); 
const actionDb = require('../helpers/actionModel.js');



//working
router.get('/:id', (req, res) => {
   
    const id = req.params.id;
    projectDb.get(id).then(response => {
        res.json(response)
    })
    .catch(error => {
        console.error(error)
    })
})

//working
router.post('/', (req, res) => {
    const project = { name: req.body.name, description: req.body.description};
    projectDb
    .insert(project)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({message: "internal server error"})
    })
})

//working
router.put('/:id', (req,res) => {
    const changes = {...req.body}
    projectDb
    .update(req.params.id, changes)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({messge: "internal server error"})
    } )
})

//working
router.delete('/:id', (req,res) => {
    projectDb
    .remove(req.params.id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({message: "internal server error"})
    })
})




module.exports = router;