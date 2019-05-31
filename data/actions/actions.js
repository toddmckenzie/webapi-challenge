const express = require('express');

const router = express.Router();

const projectDb = require('../helpers/projectModel.js'); 
const actionDb = require('../helpers/actionModel.js');

//working
router.get('/:id', validateUserId, (req, res) => {
    console.log(req.params.id)
    console.log(actionDb.get(req.params.id))
    actionDb
    .get(req.params.id)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({message: "internal server errors"})
    })
})
//working
router.get('/', (req, res) => {
    actionDb
    .get()
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({message: "internal server errors"})
    })
})

//working
router.post('/', (req, res) => {
    const project = { description: req.body.description, notes: req.body.notes};
    actionDb
    .insert(req.body)
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({message: "internal server errors"})
    })
})

//working
router.put('/:id', validateUserId, (req,res) => {

    actionDb
    .update(req.params.id, req.body)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({messge: "internal server errors"})
    } )
})

//working
router.delete('/:id', validateUserId, (req,res) => {
    
    actionDb
    .remove(req.params.id)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({messge: "internal server errors"})
    })
})

function validateUserId(req, res, next) {
    if (!req.params.id || !req.params || req.params.id < 1)
      return res.status(400).json({ message: 'invalid user id'});
    actionDb.get(req.params.id)
    .then( result => {
        console.log(result)
        if (!result || result.length === 0) {
            return res.status(400).json({ message: 'invalid user id'});
        } else {
            console.log(result)
            req.user = result;
            next();
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'invalid user id'})
    })
  };


module.exports = router;