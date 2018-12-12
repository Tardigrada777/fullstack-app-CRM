const Category = require('../models/Category')
const errorHandler = require('../utils/errorHandler')
const Position = require('../models/Position')

module.exports.getAll = async (req, res) => {
   try {
       const categories = await new Category.find({user: req.user.id})
       res.status(200).json(categories)
   } catch (error) {
       errorHandler(res, error)
   }
}

module.exports.getById = async (req, res) => {
    try {
        const category = await new Category.findById(req.params.id)
        res.status(200).json(category)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.remove = async (req, res) => {
    try {
       await Category.remove({_id: req.params.id})
       await Position.remove({category: req.params.id})

       res.status(200).json({
           message: 'Категория удалена'
       })
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.create = (req, res) => {
    try {
       
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.update = (req, res) => {
    try {
       
    } catch (error) {
        errorHandler(res, error)
    }
}