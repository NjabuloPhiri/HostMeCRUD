/** 
 * Set up controller functions
 * for CRUD logic.
 * 
 * Using Promises in each
 * controller function in 
 * order to communicate to database
 * via Mongoose. 
*/
const asyncHandler = require('express-async-handler')

const Residence = require('../models/residenceModel')

// @desc Set residence
// @route POST /api/residences
// @access Private

const setResidence = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const residence = await Residence.create({
        text: req.body.text
    })

    res.status(200).json(residence)
})

// @desc Get residence
// @route GET /api/residences
// @access Private

const getResidence = asyncHandler(async (req, res) => {
    const residences = await Residence.find()

    res.status(200).json({ message: 'Get residence' })
})

// @desc Update residences
// @route PUT /api/residences/:id
// @access Private

const updateResidence = asyncHandler(async (req, res) => {
    const residence = await Residence.findById(req.params.id)

    if(!residence){
        res.status(400)
        throw new Error('Residence not found')
    }

    const updatedResidence = await Residence.findByIdAndUpdate(req.params.id, req.
        body, {new: true,
        })

    res.status(200).json(updatedResidence)
})

// @desc Delete residences
// @route DELETE /api/residences/:id
// @access Private

const deleteResidence = asyncHandler(async (req, res) => {
    const residence = await Residence.findById(req.params.id)

    if(!residence){
        res.status(400)
        throw new Error('Residence not found')
    }

    await residence.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    setResidence,
    getResidence,
    updateResidence,
    deleteResidence,
}