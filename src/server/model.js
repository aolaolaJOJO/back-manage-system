var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017')
const models = {
    man: {
        'name': {
            'type': String,
            'require': true
        },
        'sex': {
            'type': String
        },
        'age': {
            'type': Number
        },
        'height': {
            'type': Number
        }
    }
}
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}

