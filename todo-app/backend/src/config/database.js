const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.express = mongoose.connect('mongodb://localhost/todo');
