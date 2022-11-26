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


// @desc Set residence
// @route POST /api/residences
// @access Private

const setResidence = asyncHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: 'Set residence' })
})

// @desc Get residence
// @route GET /api/residences
// @access Private

const getResidence = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get residence' })
})

// @desc Update residences
// @route PUT /api/residences/:id
// @access Private

const updateResidence = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update residence' })
})

// @desc Delete residences
// @route DELETE /api/residences/:id
// @access Private

const deleteResidence = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete residence' })
})

module.exports = {
    setResidence,
    getResidence,
    updateResidence,
    deleteResidence,
}