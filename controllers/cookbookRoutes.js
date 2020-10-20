const express = require('express')
const router = express.Router()

// const mongoose = require('../db/connection')

// Require the Cookbook controller.
const Cookbook = require('../models/Cookbook')

// Write the route to list all cookbooks
router.get('/', async (req, res) => {
    const allCookbooks = await Cookbook.find({})
    res.json({status: 200, data: allCookbooks})
})

// Write the route to get cookbook by title

router.get('/:title', async (req, res) => {
    const cookbook = await Cookbook.find({title: req.params.title})
    res.json({status: 200, data: cookbook})
})

// Write the route to get cookbook by year published
router.get('/year/:year', async (req, res) => {
    const cookbook = await Cookbook.find({yearPublished: req.params.year})
    res.json({status: 200, data: cookbook})
})

// Write the route to create a cookbook
router.post('/', async (req, res) => {
    const cookbook = await Cookbook.create(req.body)
    res.json({status: 200, data: cookbook})
})
// Write the route to update a cookbook
router.put('/:id', async (req, res) => {
    const cookbook = await Cookbook.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({status: 200, data: cookbook})
})

// Write the route to delete the cookbook by title
router.delete('/:title', async (req, res) => {
    const cookbook = await Cookbook.deleteOne({title: req.params.title})
    res.json({status: 200, data: cookbook})
})

module.exports = router;