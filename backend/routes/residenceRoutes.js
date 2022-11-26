const express = require('express')
const router = express.Router()
const { 
    setResidence, 
    getResidence, 
    updateResidence, 
    deleteResidence 
} = require('../controllers/residenceController')

/**
 * Chain all HTTP operations
 * based on directory.
 */
router.route('/').post(setResidence).get(getResidence)
router.route('/:id').put(updateResidence).delete(deleteResidence)



module.exports = router