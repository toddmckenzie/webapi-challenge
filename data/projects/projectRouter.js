const express = require('express');

const router = express.Router();

const projectDb = require('../helpers/projectModel.js'); //question if this is right/
const actionDb = require('../helpers/actionModel.js');//question if this is right?



router.get('/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    projectDb
    .get(id)
    .then(res => {
        res.status(200).json(res)
    })
    .catch(error => {
        res.status(500).json({message: "internal server error"})
    })
})

//working
router.post('/', (req, res) => {
    const project = { name: req.body.name, description: req.body.description};
    console.log(project)
    projectDb
    .insert(project)
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({message: "internal server error"})
    })
})


router.put('/:id', (req,res) => {
    const changes = {...req.body}
    projectDb
    .update(req.params.id, changes)
    .then(res => {
        res.status(200).json(res)
    })
    .catch(error => {
        res.status(500).json({messge: "internal server error"})
    } )
})

router.delete('/:id', (req,res) => {
    projectDb
    .remove(req.params.id)
    .then(res => {
        res.status(200).json({messge: "internal server error"})
    })
    .catch(error => {
        res.status(500).json({message: "internal server error"})
    })
})

// router.get('/:id', (req, res) => {
//     console.log(req.params.id)
//     projectDb
//     .getProjectActions(req.params.id)
//     .then(res => {
//         res.status(200).json(res)
//     })
//     .catch(error => {
//         res.status(500).json({message: "internal server error"})
//     })
// })



module.exports = router;