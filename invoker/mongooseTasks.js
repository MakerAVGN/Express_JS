var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var inv = mongoose.model('inv', { name: String })

var exort = new inv({ name: 'Exort' })
exort.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Sunstrike')
    }
})
