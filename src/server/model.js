var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017')
const models = {
    user: {
        'user': {
            'type': String,
            'require': true
        },
        'pwd': {
            'type': String,
            'require': true
        },
        'avatar': {
            'type': String
        },
        'type': {
            'type': Number
        }
    }
}
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}
// mongoose.deleteModel('user');
module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}