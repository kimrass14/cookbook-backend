const express = require('express')

const router = express.Router()

const mongoose = require('../db/connection')

const Author = require('../models/Author')


// Write the route to list all authors

router.get('/', async (req, res) => {
        const allAuthors = await Author.find({}).populate('cookbooks')
            res.json({status: 200, data: allAuthors})
                })
            // .finally(() => db.close())

// Write the route to get authors by firstname

router.get('/:firstname', async (req, res) => {
    const firstname = await Author.find({firstName: req.params.firstname})
        res.json({status: 200, data: firstname})
        })

// Write the route to create an author:

router.post('/', async (req, res) => {
    const author = await Author.create(req.body)
        res.json({status: 200, data: author})
        })

// Write the route to update an author
router.put('/:id', async (req, res) => {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({status: 200, data: author})
        })

// Update the cookbook using Postman.

// Bonus: Write the route to delete cookbooks by author name. (hint: There are a couple on different ways to do this and you may have to change/add code in other files)
router.delete('/:firstName', async (req, res) => {
    const author = await Author.deleteOne({firstName: req.params.firstName})
})

module.exports = router