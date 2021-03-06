const position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async (req, res) => {
    try {
        const positions = await position.find({
            category: req.params.categoryId,
            user: req.user.id
        })

        res.status(200).json(positions)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async (req, res) => {
    try {
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save();
        res.status(201).json(position);
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async (req, res) => {
    try {
        await Position.remove({_id: req.params.id})
        req.status(200).json({
            message: 'Позиция была удалена'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async (req, res) => {
    try {
        const position = await Position.findOneAndUpdate(
            {_id: req.params.id}, // Ищем
            {$set: req.body}, // Изменяем
            {new: true} // Вернуть измененный объект
        )

        res.status(200).json(position)
    } catch (e) {
        errorHandler(res, e)
    }
}
