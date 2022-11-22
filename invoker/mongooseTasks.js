var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.bonk = function(){
    console.log(this.get("name") + " casted. This is the Invoker's Orb. ")
}

var inv = mongoose.model('inv', schema)

var jdm = new inv({ name: 'Exort' })
jdm.save(function (err) {
    jdm.bonk()
})
