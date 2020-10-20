const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cookbooks_db', {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`)
})

mongoose.Promise = Promise

module.exports = mongoose
