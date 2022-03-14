const { Todo } = require('../../models/index')


exports.getAllTodo = async (req, res) => {
    try {
        const response = await Todo.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        return res.status(200).send({
            message: "success",
            data: response
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            message: 'internal server error'
        })
    }
}

exports.addTodo = async (req, res) => {
    const data = req.body
    try {
        const response = await Todo.create(data)

        res.status(201).send({
            status: "success",
            data: response
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            status: "failed",
            message: "internal server error"
        })
    }
}

exports.editTodo = async (req, res) => {
    const {id} = req.params;

    try {
        let data = await Todo.update({
            todo: req.body.todo,
            category: req.body.category
        }, {
            where: {
                id : id
            }
        })

        return res.status(200).send({
            message: "Success",
            data
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "internal server error"
        })
    }
}

exports.detailTodo = async (req, res) => {
    const {id} = req.params
    try {
        const response = await Todo.findOne({
            where: {id},
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        if(!response) {
            return res.status(400).send({
                message: "todo not found"
            })
        }

        return res.status(200).send({
            message: "success",
            data: response
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "internal server error"
        })
    }
}

exports.deleteTodo = async (req, res) => {
    const {id} = req.params
    try {
        let data = await Todo.findOne({
            where: {id}
        })

        if(!data) {
            return res.status(400).send({
                message: "todo not found"
            })
        }

        let response = await Todo.destroy({
            where: {id}
        })

        return res.status(200).send({
            message: "success",
            data: response
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "internal server error"
        })
    }
}